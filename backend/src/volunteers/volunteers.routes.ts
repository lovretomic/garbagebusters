import express from "express";

import {
    registerVolunteer,
    getVolunteersForAction,
    getActionsForVolunteers,
    unregisterVolunteer
} from "./volunteers.controller";

const router = express.Router();

router.post("/", registerVolunteer);
router.get("/actions/:actionId/volunteers", getVolunteersForAction);
router.get("/citizens/:userId/actions", getActionsForVolunteers);
router.delete("/citizens/:userId/actions/:actionId", unregisterVolunteer);

export default router;