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

export default router;