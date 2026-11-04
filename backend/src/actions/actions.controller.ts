
import { Request, Response } from "express";
import {
    getActions as getActionsService,
    getActionById as getActionByIdService,
    createAction as createActionService,
    deleteAction as deleteActionService
} from "./actions.service";

export async function getActions(req: Request, res: Response) {
    try {
        const actions = await getActionsService();
        res.status(200).json(actions);
    } catch {
        res.status(500).json({
            message: "ERROR: Can't get actions."
        });
    }
}

export async function getActionById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({ message: "Invalid action ID." });
            return;
        }

        const action = await getActionByIdService(id);

        if (!action) {
            res.status(404).json({ message: "Action not found." });
            return;
        }

        res.status(200).json(action);
    } catch {
        res.status(500).json({
            message: "ERROR: Can't get action."
        });
    }
}

export async function createAction(req: Request, res: Response) {
    try {
        const data = {
            name: req.body.name,
            description: req.body.description,
            max_volunteers: Number(req.body.max_volunteers),
            action_date: new Date(req.body.action_date),
            action_time: req.body.action_time,
            action_location: req.body.action_location
        };

        const reportId = req.body.ID_Report;

        if (
            !data.name ||
            !data.description ||
            !Number.isInteger(data.max_volunteers) ||
            data.max_volunteers <= 0 ||
            !Number.isFinite(data.action_date.getTime()) ||
            !data.action_time ||
            !data.action_location ||
            typeof reportId !== "string" ||
            !reportId
        ) {
            res.status(400).json({
                message: "Invalid or missing action data."
            });
            return;
        }

        const action = await createActionService(data, reportId);
        res.status(201).json(action);
    } catch {
        res.status(500).json({
            message: "ERROR: Can't create action."
        });
    }
}

export async function deleteAction(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            res.status(400).json({ message: "Invalid action ID." });
            return;
        }

        await deleteActionService(id);
        res.status(204).send();
    } catch {
        res.status(500).json({
            message: "ERROR: Can't delete action."
        });
    }
}
