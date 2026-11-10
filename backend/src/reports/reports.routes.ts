import express from "express";
import {
  getMyReportsController,
  createReportController,
  updateReportController,
  deleteReportController,
} from "./reports.controller";

const router = express.Router();

router.get("/my", getMyReportsController);
router.post("/", createReportController);
router.patch("/:id", updateReportController);
router.delete("/:id", deleteReportController);

export default router;
