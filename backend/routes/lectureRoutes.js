
const express = require("express");
const router = express.Router();
const Lecture = require("../models/Lecture");

// Assign a new lecture (prevent date conflict)
router.post("/", async (req, res) => {
  const { courseId, instructorId, date } = req.body;

  // Check if the instructor already has a lecture on the given date
  const conflict = await Lecture.findOne({ instructorId, date });
  if (conflict) {
    return res.status(400).json({ message: "Instructor already has a lecture on this date" });
  }

  const lecture = new Lecture({ courseId, instructorId, date });
  await lecture.save();
  res.json(lecture);
});

// Get lectures for an instructor
router.get("/instructor/:id", async (req, res) => {
  const lectures = await Lecture.find({ instructorId: req.params.id }).populate("courseId");
  res.json(lectures);
});

// (Optional) Get all lectures – useful for admin
router.get("/", async (req, res) => {
  const lectures = await Lecture.find().populate("courseId").populate("instructorId");
  res.json(lectures);
});

// Get all lectures (for admin)
// router.get("/", async (req, res) => {
//   const lectures = await Lecture.find()
//     .populate("courseId")
//     .populate("instructorId");
//   res.json(lectures);
// });


module.exports = router;
