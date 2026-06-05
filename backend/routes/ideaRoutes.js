import express from "express";
import {
  createIdea,
  getIdeas,
  getIdeaById,
  updateIdea,
  deleteIdea,
} from "../controllers/ideaController.js";
import protect from "../middleware/firebaseAuth.js";
import syncUser from "../middleware/syncUser.js";

const router = express.Router();

router.post(
  "/",
  protect,
  syncUser,
  createIdea
);

router.get(
  "/",
  protect,
  syncUser,
  getIdeas
);

router.get(
  "/:id",
  protect,
  syncUser,
  getIdeaById
);

router.put(
  "/:id",
  protect,
  syncUser,
  updateIdea
);

router.delete(
  "/:id",
  protect,
  syncUser,
  deleteIdea
);

export default router;