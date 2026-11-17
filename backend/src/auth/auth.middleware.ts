import { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.session.user) {
        res.status(401).json({
            message: "You must be logged in."
        });
        return;
    }

    next();
}
