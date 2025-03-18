// server/controllers/userController.js

const User = require("../models/User");
const bcrypt = require("bcryptjs");

/**
 * GET /api/users/profile
 * Retrieves the profile of the currently authenticated user.
 * Expects req.user (populated by authMiddleware) to contain the userId.
 */
exports.getUserProfile = async (req, res, next) => {
  try {
    // Find the user by the id stored in req.user (set by authMiddleware)
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      // If user is not found, return 404 Not Found
      return res.status(404).json({ message: "User not found." });
    }
    // Respond with the user data
    res.status(200).json({ user });
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};

/**
 * PUT /api/users/profile
 * Updates the profile of the currently authenticated user.
 * If a password is provided, it will be hashed before saving.
 */
exports.updateUserProfile = async (req, res, next) => {
  try {
    const updates = req.body;

    // If updating the password, hash it before saving
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    // Update the user document; req.user contains the userId (or the whole user) from authMiddleware
    const user = await User.findByIdAndUpdate(req.user.userId, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    // Respond with the updated user data
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/users
 * Creates a new user. This endpoint is typically admin-only.
 * It expects name, email, and password in the request body.
 * The role is optional and defaults to "user" if not provided.
 */
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required." });
    }

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "A user with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the new user document. Use provided role or default to "user"
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    // Save the new user to the database
    await newUser.save();

    // Return a successful response with the new user's details (excluding the password)
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/users/all
 * Retrieves all users from the database (admin-only).
 * The password field is excluded from the returned data.
 */
exports.getAllUsers = async (req, res) => {
  try {
    // Retrieve all users and exclude the password field
    const users = await User.find().select("-password");
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/**
 * PUT /api/users/:id
 * Updates a user by their ID (admin-only).
 * If a password is provided, it will be hashed before updating.
 */
exports.updateUserById = async (req, res) => {
  try {
    const updates = req.body;

    // If password is included, hash it before updating
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    // Update the user document based on the ID in req.params.id
    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE /api/users/:id
 * Deletes a user by their ID (admin-only).
 */
exports.deleteUser = async (req, res) => {
  try {
    // Delete the user based on the ID provided in the URL parameters
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * GET /api/users/count
 * Returns the total number of users in the database (admin-only).
 */
exports.getUserCount = async (req, res) => {
  try {
    // Use countDocuments to get the total user count
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
