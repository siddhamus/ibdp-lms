const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const { verifyToken } = require("../middleware/authMiddleware");

// Public routes to view courses
router.get("/", getCourses);
router.get("/:id", getCourseById);

// Protected routes (requires authentication) for creating/updating/deleting courses
router.post("/", verifyToken, createCourse);
router.put("/:id", verifyToken, updateCourse);
router.delete("/:id", verifyToken, deleteCourse);

module.exports = router;
