import { Request, Response } from "express";
import {
    registerVolunteer as registerVolunteerService,
    getVolunteersForAction as getVolunteersForActionService,
    getActionsForVolunteers as getActionsForVolunteerService,
    unregisterVolunteer as unregisterVolunteerService,
    getActionCapacity as getActionCapacityService,
    getAllActionsCapacity as getAllActionsCapacityService
} from "./volunteers.service";


export async function registerVolunteer(req: Request, res: Response) {
    try{
        const userId = Number(req.body.ID_User);
        const actionId = Number(req.body.ID_Action);

        if (!Number.isInteger(userId) || userId <= 0 ||
            !Number.isInteger(actionId) || actionId <= 0) {
            res.status(400).json({ message: "Invalid user or action ID." });
            return;
        }

        const volunteer =  await registerVolunteerService(actionId, userId);
        res.status(201).json(volunteer);
  } catch (error) {
        if (error instanceof Error) {
            if (error.message === "CITIZEN_NOT_FOUND" ||
                error.message === "ACTION_NOT_FOUND") {
                res.status(404).json({ message: error.message });
                return;
            }

            if (error.message === "ACTION_FULL" ||
                error.message === "ALREADY_REGISTERED" ||
                error.message === "REGISTRATION_CONFLICT") {
                res.status(409).json({ message: error.message });
                return;
            }
        }

        res.status(500).json({
            message: "ERROR: Can't register volunteer."
        });
    }
}

export async function getVolunteersForAction(req: Request, res: Response) {
    try{
        const actionId = Number(req.params.actionId);
        
        if (!Number.isInteger(actionId) || actionId <= 0) {
            res.status(400).json({ message: "Invalid action ID." });
            return;
        }

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
        const userId = Number(req.params.userId);

        if (!Number.isInteger(userId) || userId <= 0) {
            res.status(400).json({ message: "Invalid user ID." });
            return;
        }

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

        if (!Number.isInteger(userId) || userId <= 0 ||
            !Number.isInteger(actionId) || actionId <= 0) {
            res.status(400).json({
                message: "Invalid user or action ID."
            });
            return;
        }

        await unregisterVolunteerService(userId, actionId);
        res.status(204).send();
        
    } catch {
        res.status(500).json({
            message: "ERROR: Can't unregister volunteer."
        })
}
}

export async function getActionCapacity(req: Request, res: Response) {
    try{
        const actionId = Number(req.params.actionId);

        if(!Number.isInteger(actionId) || actionId <= 0) {
            res.status(400).json({message: "Invalid action ID."});
            return;
        }

        const capacity = await getActionCapacityService(actionId);
        res.status(200).json(capacity);
    } catch (error) {
        if(error instanceof Error && error.message === "ACTION_NOT_FOUND") {
            res.status(404).json({message: "Action not found."});
            return;
        }

        res.status(500).json({
            message: "ERROR: Can't get action capacity."
        });
    }  
}

export async function getAllActionsCapacity(req: Request, res: Response) {
    try {
        const capacities = await getAllActionsCapacityService();
        res.status(200).json(capacities);
    } catch {
        res.status(500).json({
            message: "ERROR: Can't get actions capacity."
        });
    }
}