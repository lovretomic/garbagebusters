import { Request, Response } from "express";
import { getMyReports } from "./reports.service";

export async function getMyReportsController(
    req: Request,
    res: Response
): Promise<void> {

    const userId = req.session.user?.id;

    if (!userId) {
        res.status(401).json({
            message: "Authentication required."
        });
        return;
    }

    try {
        const reports = await getMyReports(userId);
        res.status(200).json(reports);
    }

    catch (error) {
        console.error("Failed to fetch user reports:", error);

        res.status(500).json({
            message: "Failed to fetch reports."
        });

    }

}
