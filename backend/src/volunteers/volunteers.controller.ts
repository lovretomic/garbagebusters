import { Request, Response } from "express";
import { AppError } from "../error-handling/app.error";
import {
  registerVolunteer as registerVolunteerService,
  getActionsForVolunteers as getActionsForVolunteerService,
  unregisterVolunteer as unregisterVolunteerService,
} from "./volunteers.service";

export async function registerVolunteer(req: Request, res: Response) {
  try {
    const userId = req.session.user!.id;
    const actionId = Number(req.body.ID_Action);

    if (!Number.isInteger(actionId) || actionId <= 0) {
      res.status(400).json({ message: "Invalid action ID." });
      return;
    }

    const volunteer = await registerVolunteerService(actionId, userId);
    res.status(201).json(volunteer);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
    res.status(500).json({
      message: "Can't register volunteer.",
    });
  }
}
export async function getActionsForVolunteers(req: Request, res: Response) {
  try {
    const userId = req.session.user!.id;

    if (!Number.isInteger(userId) || userId <= 0) {
      res.status(400).json({ message: "Invalid user ID." });
      return;
    }

    const actions = await getActionsForVolunteerService(userId);
    res.status(200).json(actions);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
    return;
  }
  res.status(500).json({
    message: "Can't get actions.",
  });
}

export async function unregisterVolunteer(req: Request, res: Response) {
  try {
    const userId = req.session.user!.id;
    const actionId = Number(req.params.actionId);

    if (!Number.isInteger(userId) || userId <= 0 || !Number.isInteger(actionId) || actionId <= 0) {
      res.status(400).json({
        message: "Invalid user or action ID.",
      });
      return;
    }

    await unregisterVolunteerService(userId, actionId);
    res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
  res.status(500).json({
    message: "Can't unregister volunteer.",
  });
}
