import express from "express";
import { requireAuth } from "../auth/auth.middleware";

import {
    registerVolunteer,
    getActionsForVolunteers,
    unregisterVolunteer,
} from "./volunteers.controller";

const router = express.Router();
router.use(requireAuth);

router.post("/", registerVolunteer);
router.get("/me/actions", getActionsForVolunteers);
router.delete("/me/actions/:actionId", unregisterVolunteer);

export default router;