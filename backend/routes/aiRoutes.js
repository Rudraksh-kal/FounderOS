import express from "express";

import {
  analyzeIdea,
  analyzeDocument,
  getMyAnalyses,
  getAnalysisById,
  deleteAnalysis,
} from "../controllers/aiController.js";

import protect from "../middleware/firebaseAuth.js";
import syncUser from "../middleware/syncUser.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  syncUser,
  analyzeIdea
);

router.post(
  "/analyze-document",
  protect,
  syncUser,
  upload.single("document"),
  analyzeDocument
);

router.get(
  "/",
  protect,
  syncUser,
  getMyAnalyses
);

router.get(
  "/:id",
  protect,
  syncUser,
  getAnalysisById
);

router.delete(
  "/:id",
  protect,
  syncUser,
  deleteAnalysis
);

export default router;