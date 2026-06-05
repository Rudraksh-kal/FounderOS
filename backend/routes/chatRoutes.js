import express from "express";

import protect from "../middleware/firebaseAuth.js";
import syncUser from "../middleware/syncUser.js";

import {
  getChats,
  createChat,
  addMessage,
  renameChat,
  deleteChat,
  updateChatTitle,
} from "../controllers/chatController.js";

const router = express.Router();

router.get("/", protect, syncUser, getChats);

router.post("/", protect, syncUser, createChat);

router.put("/:id/message", protect, syncUser, addMessage);

router.put("/:id", protect, syncUser, renameChat);

router.patch("/:id/title", protect, syncUser, updateChatTitle);

router.delete("/:id", protect, syncUser, deleteChat);

export default router;