import { Router } from "express";
import { generators } from "openid-client";
import { randomBytes, scrypt } from "node:crypto";
import { createGoogleClient } from "./auth.config";
import { prisma } from "../lib/prisma";
import { hashPassword, verifyPassword } from "./password";
import { requireAdmin } from "./admin.middleware";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Authentication module is running",
  });
});

router.get("/google", async (req, res) => {
  try {
    const client = await createGoogleClient();

    const state = generators.state();
    const nonce = generators.nonce();
    const codeVerifier = generators.codeVerifier();
    const codeChallenge = generators.codeChallenge(codeVerifier);

    req.session.oauth = {
      state,
      nonce,
      codeVerifier,
    };

    const authorizationUrl = client.authorizationUrl({
      scope: "openid email profile",
      response_type: "code",
      state,
      nonce,
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    });

    req.session.save((error) => {
      if (error) {
        console.error("Failed to save OAuth session:", error);

        return res.status(500).json({
          error: "Failed to initialize Google login",
        });
      }

      res.redirect(authorizationUrl);
    });
  } catch (error) {
    console.error("Google login error:", error);

    res.status(500).json({
      error: "Failed to initialize Google login",
    });
  }
});

router.get("/google/callback", async (req, res) => {
  try {
    const oauth = req.session.oauth;

    if (!oauth) {
      return res.status(400).json({
        error: "OAuth session not found",
      });
    }

    delete req.session.oauth;

    await new Promise<void>((resolve, reject) => {
      req.session.save((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    const client = await createGoogleClient();
    const params = client.callbackParams(req);

    const tokenSet = await client.callback(process.env.GOOGLE_CALLBACK_URL!, params, {
      state: oauth.state,
      nonce: oauth.nonce,
      code_verifier: oauth.codeVerifier,
    });

    const claims = tokenSet.claims();

    if (!claims.email || !claims.email_verified) {
      return res.status(403).json({
        error: "Google email is not verified",
      });
    }

    const email = claims.email;
    const googleUsername = `google_${claims.sub}`;

    let user = await prisma.app_User.findUnique({
      where: {
        username: googleUsername,
      },
    });

    if (!user) {
      const existingEmail = await prisma.app_User.findUnique({
        where: {
          email,
        },
      });

      if (existingEmail) {
        return res.status(409).json({
          error: "Email is already associated with another account",
        });
      }

      const randomPassword = randomBytes(32).toString("hex");
      const salt = randomBytes(16);

      const derivedKey = await new Promise<Buffer>((resolve, reject) => {
        scrypt(randomPassword, salt, 64, (error, key) => {
          if (error) reject(error);
          else resolve(key);
        });
      });

      const passwordHash = ["scrypt", salt.toString("hex"), derivedKey.toString("hex")].join(":");

      user = await prisma.app_User.create({
        data: {
          name: claims.given_name || claims.name || "Google User",
          surname: claims.family_name || null,
          username: googleUsername,
          email,
          password: passwordHash,
          profile_photo: claims.picture || null,

          citizen: {
            create: {},
          },
        },
      });
    } else if (user.email !== email) {
      const emailOwner = await prisma.app_User.findUnique({
        where: {
          email,
        },
      });

      if (emailOwner) {
        return res.status(409).json({
          error: "Email is already associated with another account",
        });
      }

      user = await prisma.app_User.update({
        where: {
          ID_User: user.ID_User,
        },
        data: {
          email,
        },
      });
    }

    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).json({
          error: "Failed to create session",
        });
      }

      req.session.user = {
        id: user.ID_User,
        email: user.email,
        name: user.name,
      };

      req.session.save((saveError) => {
        if (saveError) {
          return res.status(500).json({
            error: "Failed to save session",
          });
        }

        res.redirect("/home");
      });
    });
  } catch (error) {
    console.error("Google callback error:", error);

    if (
      error instanceof Error &&
      error.name === "RPError" &&
      error.message.includes("state mismatch")
    ) {
      return res.status(400).json({
        error: "Invalid OAuth state",
      });
    }

    return res.status(500).json({
      error: "Google authentication failed",
    });
  }
});

router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body ?? {};

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !username.trim() ||
    !password ||
    username.length > 100 ||
    password.length > 1024
  ) {
    res.status(400).json({
      message: "Invalid login data.",
    });
    return;
  }

  try {
    const user = await prisma.app_User.findUnique({
      where: {
        username: username.trim(),
      },
      include: {
        admin: true,
      },
    });

    if (!user || !user.admin || !(await verifyPassword(password, user.password))) {
      res.status(401).json({
        message: "Invalid username or password.",
      });
      return;
    }

    req.session.regenerate((error) => {
      if (error) {
        res.status(500).json({
          message: "Failed to create session.",
        });
        return;
      }

      req.session.user = {
        id: user.ID_User,
        email: user.email,
        name: user.name,
      };

      req.session.save((saveError) => {
        if (saveError) {
          res.status(500).json({
            message: "Failed to save session.",
          });
          return;
        }

        res.status(200).json({
          message: "Admin login successful.",
          user: {
            id: user.ID_User,
            username: user.username,
            name: user.name,
          },
        });
      });
    });
  } catch (error) {
    console.error("Admin login failed:", error);

    res.status(500).json({
      message: "Authentication failed.",
    });
  }
});

router.patch("/admin/password", requireAdmin, async (req, res) => {
  const { oldPassword, newPassword } = req.body ?? {};
  const userId = req.session.user?.id;

  if (!userId) {
    return res.status(401).json({
      message: "Authentication required.",
    });
  }

  if (
    typeof oldPassword !== "string" ||
    !oldPassword ||
    oldPassword.length > 1024 ||
    typeof newPassword !== "string" ||
    newPassword.length < 12 ||
    newPassword.length > 1024
  ) {
    return res.status(400).json({
      message: "Invalid password data.",
    });
  }

  try {
    const user = await prisma.app_User.findUnique({
      where: { ID_User: userId },
      select: { password: true },
    });

    if (!user || !(await verifyPassword(oldPassword, user.password))) {
      return res.status(401).json({
        message: "Current password is incorrect.",
      });
    }

    await prisma.app_User.update({
      where: { ID_User: userId },
      data: {
        password: await hashPassword(newPassword),
      },
    });

    return res.status(200).json({
      message: "Password changed successfully.",
    });
  } catch (error) {
    console.error("Password change failed:", error);

    return res.status(500).json({
      message: "Failed to change password.",
    });
  }
});

router.get("/admin/me", requireAdmin, (req, res) => {
  res.status(200).json({
    user: req.session.user,
  });
});

router.get("/me", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      error: "Not authenticated",
    });
  }

  res.json({
    user: req.session.user,
  });
});

router.post("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        error: "Logout failed",
      });
    }

    res.clearCookie("connect.sid");

    res.json({
      message: "Logout successful",
    });
  });
});

export default router;
