import { Request, Response } from "express";
import { createAction as createActionService } from './actions.service';

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

        const reportId = req.body.ID_Action;

        const action = await createActionService(data, reportId);
        res.status(201).json(action);
    } catch {
        res.status(500).json({
            message: "ERROR: Can't create action."
        })
    }
}

