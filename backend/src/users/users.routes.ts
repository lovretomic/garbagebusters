import express from "express";
import { requireAuth } from "../auth/auth.middleware";

import { getAllUsers } from "./users.controller";

const router = express.Router();

router.use(requireAuth);

router.get("/", getAllUsers);

export default router;
