const Course = require("../models/Course");

// Get all courses
exports.getCourses = async (req, res, next) => {
  try {
    // Optionally populate the instructor data
    const courses = await Course.find().populate("user", "name email");
    res.json({ data: courses });
  } catch (err) {
    next(err);
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }
    res.json({ data: course });
  } catch (err) {
    next(err);
  }
};

// Create a new course
exports.createCourse = async (req, res, next) => {
  try {
    const { name, subject, description, image } = req.body;
    // Assuming you have authentication middleware that adds req.user
    const course = new Course({
      user: req.user.userId, // The instructor's ID from the token
      name,
      subject,
      description,
      image,
    });
    await course.save();
    res.status(201).json({ data: course });
  } catch (err) {
    next(err);
  }
};

// Update an existing course
exports.updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }
    res.json({ data: course });
  } catch (err) {
    next(err);
  }
};

// Delete a course
exports.deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }
    res.json({ message: "Course deleted." });
  } catch (err) {
    next(err);
  }
};
