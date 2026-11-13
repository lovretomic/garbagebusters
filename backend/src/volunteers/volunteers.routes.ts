import express from "express";
import { requireAuth } from "../auth/auth.middleware";

import {
    registerVolunteer,
    getVolunteersForAction,
    getActionsForVolunteers,
    unregisterVolunteer,
    getActionCapacity,
    getAllActionsCapacity
} from "./volunteers.controller";

const router = express.Router();
router.use(requireAuth);

router.post("/", registerVolunteer);
router.get("/actions/:actionId/volunteers", getVolunteersForAction);
router.get("/me/actions", getActionsForVolunteers);
router.delete("/me/actions/:actionId", unregisterVolunteer);
router.get("/capacity", getAllActionsCapacity);
router.get("/actions/:actionId/capacity", getActionCapacity);

export default router;