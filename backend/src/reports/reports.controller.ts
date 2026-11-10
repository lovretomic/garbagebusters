import { Request, Response } from "express";
import {
    getMyReports,
    createReport,
    updateReport,
    deleteReport,
    type UpdateReportInput
} from "./reports.service";

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

export async function createReportController(
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

    const { GPS_coordinates, photos_before, category, waste_volume } =
        req.body ?? {};

    if (
        typeof GPS_coordinates !== "string" ||
        !GPS_coordinates.trim() ||
        typeof photos_before !== "string" ||
        !photos_before.trim() ||
        typeof category !== "string" ||
        !category.trim() ||
        typeof waste_volume !== "number" ||
        !Number.isFinite(waste_volume) ||
        waste_volume <= 0
    ) {
        res.status(400).json({
            message: "Invalid or missing report data."
        });
        return;
    }

    try {
        const report = await createReport(userId, {
            GPS_coordinates: GPS_coordinates.trim(),
            photos_before: photos_before.trim(),
            category: category.trim(),
            waste_volume
        });

        res.status(201).json(report);
    } catch (error) {
        console.error("Failed to create report:", error);

        res.status(500).json({
            message: "Failed to create report."
        });
    }
}


export async function updateReportController(
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

    const reportId = Number(req.params.id);

    if (!Number.isSafeInteger(reportId) || reportId <= 0) {
        res.status(400).json({
            message: "Invalid report ID."
        });
        return;
    }

    const body: unknown = req.body;

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        res.status(400).json({
            message: "Invalid report data."
        });
        return;
    }

    const input = body as Record<string, unknown>;
    const allowedFields = [
        "GPS_coordinates",
        "photos_before",
        "category",
        "waste_volume"
    ];

    const fields = Object.keys(input);

    if (
        fields.length === 0 ||
        fields.some((field) => !allowedFields.includes(field))
    ) {
        res.status(400).json({
            message: "Invalid or unsupported fields."
        });
        return;
    }

    const data: UpdateReportInput = {};

    for (const field of [
        "GPS_coordinates",
        "photos_before",
        "category"
    ] as const) {
        if (field in input) {
            const value = input[field];

            if (typeof value !== "string" || !value.trim()) {
                res.status(400).json({
                    message: `Invalid ${field}.`
                });
                return;
            }

            data[field] = value.trim();
        }
    }

    if ("waste_volume" in input) {
        const volume = input.waste_volume;

        if (
            typeof volume !== "number" ||
            !Number.isFinite(volume) ||
            volume <= 0
        ) {
            res.status(400).json({
                message: "Invalid waste_volume."
            });
            return;
        }

        data.waste_volume = volume;
    }

    try {
        const report = await updateReport(userId, reportId, data);

        if (!report) {
            res.status(404).json({
                message: "Report not found or cannot be edited."
            });
            return;
        }

        res.status(200).json(report);
    } catch (error) {
        console.error("Failed to update report:", error);

        res.status(500).json({
            message: "Failed to update report."
        });
    }
}


export async function deleteReportController(
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

    const reportId = Number(req.params.id);

    if (!Number.isSafeInteger(reportId) || reportId <= 0) {
        res.status(400).json({
            message: "Invalid report ID."
        });
        return;
    }

    try {
        const deleted = await deleteReport(userId, reportId);

        if (!deleted) {
            res.status(404).json({
                message: "Report not found or cannot be deleted."
            });
            return;
        }

        res.status(204).send();
    } catch (error) {
        console.error("Failed to delete report:", error);

        res.status(500).json({
            message: "Failed to delete report."
        });
    }
}