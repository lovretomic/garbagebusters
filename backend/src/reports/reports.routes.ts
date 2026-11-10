import express from "express";
import {
  getMyReportsController,
  getMyReportByIdController,
  createReportController,
  updateReportController,
  deleteReportController,
} from "./reports.controller";

const router = express.Router();

router.get("/my", getMyReportsController);
router.get("/:id", getMyReportByIdController);
router.post("/", createReportController);
router.patch("/:id", updateReportController);
router.delete("/:id", deleteReportController);

export default router;
