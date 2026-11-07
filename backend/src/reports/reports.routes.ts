
import express from "express";
import { getMyReportsController } from "./reports.controller";

const router = express.Router();

router.get("/my", getMyReportsController);

export default router;
