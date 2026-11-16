import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";

export async function requireApprovedAssociation(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const userId = req.session.user?.id;

    if (!userId) {
        res.status(401).json({
            message: "Authentication required."
        });
        return;
    }

    try {
        const association = await prisma.eco_Association.findUnique({
            where: {
                ID_User: userId
            },
            select: {
                is_approved: true
            }
        });

        if (!association || !association.is_approved) {
            res.status(403).json({
                message: "Approved eco-association required."
            });
            return;
        }

        next();
    } catch (error) {
        console.error("Association authorization failed:", error);

        res.status(500).json({
            message: "Failed to verify association permissions."
        });
    }
}