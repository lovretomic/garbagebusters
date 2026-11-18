import express from "express";
import { requireAdmin } from "../auth/admin.middleware";
import { getAllUsers, createAdminUser } from "./users.controller";

const router = express.Router();

router.use(requireAdmin);

router.get("/", getAllUsers);
router.post("/", createAdminUser);

export default router;
