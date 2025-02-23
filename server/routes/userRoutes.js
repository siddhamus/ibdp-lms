// server/routes/userRoutes.js
const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} = require("../controllers/userController");
const { verifyToken, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

// Protected route to get user profile
router.get("/profile", verifyToken, getUserProfile);

// Protected route to update user profile
router.put("/profile", verifyToken, updateUserProfile);

// Admin-only route to get all users
router.get("/all", verifyToken, adminOnly, getAllUsers);

module.exports = router;
