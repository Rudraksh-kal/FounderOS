import express from "express";
import {
  analyzeIdea,
  getMyAnalyses,
  getAnalysisById,
  deleteAnalysis,
} from "../controllers/aiController.js";

import protect from "../middleware/firebaseAuth.js";
import syncUser from "../middleware/syncUser.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  syncUser,
  analyzeIdea
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