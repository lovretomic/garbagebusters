
import express from "express";
import {
    getActions,
    getActionById,
    createAction,
    deleteAction
} from "./actions.controller";
import { requireApprovedAssociation } from "../auth/association.middleware";

const router = express.Router();

router.get("/", getActions);
router.get("/:id", getActionById);
router.post("/", requireApprovedAssociation, createAction);
router.delete("/:id", requireApprovedAssociation, deleteAction);

export default router;
