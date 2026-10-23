import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Authentication module is running"
    });
});

export default router;