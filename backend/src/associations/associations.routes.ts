import { Router } from "express";
import { requireApprovedAssociation } from "../auth/association.middleware";

const router = Router();

router.get("/me", requireApprovedAssociation, (req, res) => {
    res.status(200).json({
        message: "Approved eco-association.",
        userId: req.session.user?.id
    });
});

export default router;