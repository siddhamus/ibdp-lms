// server/routes/userRoutes.js

// Import Express and create a new router instance.
const express = require("express");
const router = express.Router();

// Import user controller functions.
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  updateUserById,
  createUser,
  getUserCount,
} = require("../controllers/userController");

// Import authentication and authorization middleware.
const { verifyToken, adminOnly } = require("../middleware/authMiddleware");

/**
 * Route: GET /api/users/profile
 * Description: Returns the profile of the currently authenticated user.
 * Middleware: verifyToken - Ensures that the request has a valid JWT.
 */
router.get("/profile", verifyToken, getUserProfile);

/**
 * Route: PUT /api/users/profile
 * Description: Updates the profile of the currently authenticated user.
 * Middleware: verifyToken - Ensures that the request has a valid JWT.
 */
router.put("/profile", verifyToken, updateUserProfile);

/**
 * Route: GET /api/users/all
 * Description: Returns a list of all users.
 * Middleware:
 *   - verifyToken: Ensures the request is authenticated.
 *   - adminOnly: Restricts access to admin users.
 * Additional Logging: Logs incoming requests for debugging purposes.
 */
router.get(
  "/all",
  verifyToken,
  adminOnly,
  (req, res, next) => {
    console.log("Received request for GET /api/users/all");
    next();
  },
  getAllUsers
);

/**
 * Route: PUT /api/users/:id
 * Description: Updates a user by their ID.
 * Middleware:
 *   - verifyToken: Ensures the request is authenticated.
 *   - adminOnly: Restricts access to admin users.
 */
router.put("/:id", verifyToken, adminOnly, updateUserById);

/**
 * Route: POST /api/users
 * Description: Creates a new user.
 * Middleware:
 *   - verifyToken: Ensures the request is authenticated.
 *   - adminOnly: Restricts access to admin users.
 */
router.post("/", verifyToken, adminOnly, createUser);

/**
 * Route: DELETE /api/users/:id
 * Description: Deletes a user by their ID.
 * Middleware:
 *   - verifyToken: Ensures the request is authenticated.
 *   - adminOnly: Restricts access to admin users.
 */
router.delete("/:id", verifyToken, adminOnly, deleteUser);

/**
 * Route: GET /api/users/count
 * Description: Returns the total number of users in the database.
 * Middleware:
 *   - verifyToken: Ensures the request is authenticated.
 *   - adminOnly: Restricts access to admin users.
 */
router.get("/count", verifyToken, adminOnly, getUserCount);

// Export the router to be used in the main server file.
module.exports = router;
