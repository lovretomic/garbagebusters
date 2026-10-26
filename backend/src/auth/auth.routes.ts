import { Router } from "express";
import { generators } from "openid-client";
import { createGoogleClient } from "./auth.config";

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Authentication module is running"
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
            codeVerifier
        };

        const authorizationUrl = client.authorizationUrl({
            scope: "openid email profile",
            response_type: "code",
            state,
            nonce,
            code_challenge: codeChallenge,
            code_challenge_method: "S256"
        });

        req.session.save((error) => {
            if (error) {
                console.error("Failed to save OAuth session:", error);
                return res.status(500).json({
                    error: "Failed to initialize Google login"
                });
            }

            res.redirect(authorizationUrl);
        });
    } catch (error) {
        console.error("Google login error:", error);

        res.status(500).json({
            error: "Failed to initialize Google login"
        });
    }
});

router.get("/google/callback", async (req, res) => {
    try {
        const oauth = req.session.oauth;

        if (!oauth) {
            return res.status(400).json({
                error: "OAuth session not found"
            });
        }

        const client = await createGoogleClient();

        const params = client.callbackParams(req);

        const tokenSet = await client.callback(
            process.env.GOOGLE_CALLBACK_URL!,
            params,
            {
                state: oauth.state,
                nonce: oauth.nonce,
                code_verifier: oauth.codeVerifier
            }
        );

        const claims = tokenSet.claims();

        if (!claims.email || !claims.email_verified) {
            return res.status(403).json({
                error: "Google email is not verified"
            });
        }

        req.session.regenerate((error) => {
            if (error) {
                return res.status(500).json({
                    error: "Failed to create session"
                });
            }

            req.session.user = {
                id: claims.sub,
                email: claims.email!,
                name: claims.name
            };

            req.session.save((saveError) => {
                if (saveError) {
                    return res.status(500).json({
                        error: "Failed to save session"
                    });
                }

                res.json({
                    message: "Google login successful",
                    user: req.session.user
                });
            });
        });

    } catch (error) {
        console.error("Google callback error:", error);

        res.status(500).json({
            error: "Google authentication failed"
        });
    }
});

router.get("/me", (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            error: "Not authenticated"
        });
    }

    res.json({
        user: req.session.user
    });
});

router.post("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({
                error: "Logout failed"
            });
        }

        res.clearCookie("connect.sid");

        res.json({
            message: "Logout successful"
        });
    });
});

export default router;