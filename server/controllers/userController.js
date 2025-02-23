// server/controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// GET /api/users/profile
exports.getUserProfile = async (req, res, next) => {
  try {
    // req.user is populated by your authMiddleware (it contains the userId)
    const user = await User.findById(req.user).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

// PUT /api/users/profile
exports.updateUserProfile = async (req, res, next) => {
  try {
    const updates = req.body;

    // If updating the password, hash it before saving
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    // Update user by ID; return the new document without the password field
    const user = await User.findByIdAndUpdate(req.user, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
