import { Request, Response } from "express";
import {
    registerVolunteer as registerVolunteerService,
    getVolunteersForAction as getVolunteersForActionService,
    getActionsForVolunteers as getActionsForVolunteerService,
    unregisterVolunteer as unregisterVolunteerService
} from "./volunteers.service";


export async function registerVolunteer(req: Request, res: Response) {
    try{
        const userId = Number(req.body.ID_User);
        const actionId = Number(req.body.ID_Action);

        const volunteer =  await registerVolunteerService(userId, actionId);
        res.status(201).json(volunteer);
 } catch {
    res.status(500).json({
            message: "ERROR: Can't register volunteer."
        })
 }
}

export async function getVolunteersForAction(req: Request, res: Response) {
    try{
        const actionId = Number(req.body.ID_Action);

        const volunteers = await getVolunteersForActionService(actionId);
        res.status(200).json(volunteers);

    } catch {
       res.status(500).json({
          message: "ERROR: Can't get volunteers."
        });
    }
}

export async function getActionsForVolunteers(req:Request, res: Response) {
    try{
        const userId = req.body.ID_User;

        const actions = await getActionsForVolunteerService(userId);
        res.status(200).json(actions);
    } catch {
        res.status(500).json({
            message: "ERROR: Can't get actions."
        });
    }


}

export async function unregisterVolunteer(req:Request, res: Response) {
    try {
        const userId = Number(req.params.userId);
        const actionId = Number(req.params.actionId);

        await unregisterVolunteerService(userId, actionId);
        res.status(204).send();
    } catch {
        res.status(500).json({
            message: "ERROR: Can't unregister volunteer."
        })
}
}