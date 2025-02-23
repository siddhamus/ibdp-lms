// server/models/Course.js
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    // Instructor (course creator) reference
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Course title (equivalent to "name")
    name: {
      type: String,
      required: true,
    },
    // Course subject (e.g., "English Literature")
    subject: {
      type: String,
      required: true,
    },
    // Optional detailed description of the course
    description: {
      type: String,
      default: "",
    },
    // Optional image URL for the course
    image: {
      type: String,
      default: "",
    },
    // Optional course rating (e.g., average rating from reviews)
    rating: {
      type: Number,
      default: 0,
    },
    // Optional course duration (e.g., "10 weeks", "3 months")
    duration: {
      type: String,
      default: "",
    },
    // Optional count of enrolled students
    studentsCount: {
      type: Number,
      default: 0,
    },
    // Alternatively, you could track students as an array of user IDs:
    // students: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User"
    // }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
