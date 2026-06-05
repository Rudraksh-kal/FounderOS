import express from "express";
import protect from "../middleware/firebaseAuth.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed",
    user: req.user,
  });
});

export default router;