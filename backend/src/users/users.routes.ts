import express from "express";
import { requireAdmin } from "../auth/admin.middleware";
import { getAllUsers } from "./users.controller";

const router = express.Router();

router.use(requireAdmin);

router.get("/", getAllUsers);

export default router;
