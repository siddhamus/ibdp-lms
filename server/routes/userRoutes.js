// server/routes/userRoutes.js
const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Protected route to get user profile
router.get("/profile", authMiddleware, getUserProfile);

// Protected route to update user profile
router.put("/profile", authMiddleware, updateUserProfile);

module.exports = router;
