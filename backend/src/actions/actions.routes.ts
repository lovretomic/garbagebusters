
import express from "express";
import {
    getActions,
    getActionsByUserId,
    getActionById,
    createAction,
    deleteAction,
    getVolunteersForAction,
    getActionCapacity,
    getAllActionsCapacity
} from "./actions.controller";
import { requireApprovedAssociation } from "../auth/association.middleware";

const router = express.Router();

router.get("/", getActions);
router.get("/:userid", getActionsByUserId);
router.get("/:id", getActionById);
router.get("/:id/volunteers", getVolunteersForAction);
router.get("/capacity", getAllActionsCapacity);
router.get("/:id/capacity", getActionCapacity);
router.post("/", requireApprovedAssociation, createAction);
router.delete("/:id", requireApprovedAssociation, deleteAction);

export default router;
