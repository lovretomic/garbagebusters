import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";

export async function requireAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
  const userId = req.session.user?.id;

  if (!userId) {
    res.status(401).json({
      message: "Authentication required.",
    });
    return;
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: {
        ID_User: userId,
      },
      select: {
        ID_User: true,
      },
    });

    if (!admin) {
      res.status(403).json({
        message: "Administrator access required.",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Admin authorization failed:", error);

    res.status(500).json({
      message: "Failed to verify administrator permissions.",
    });
  }
}
