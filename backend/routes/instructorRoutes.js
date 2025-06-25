const express = require("express");
const router = express.Router();
const Instructor = require("../models/Instructor");

// Get all instructors
router.get("/", async (req, res) => {
  const instructors = await Instructor.find();
  res.json(instructors);
});

// Add dummy instructors
router.post("/", async (req, res) => {
  const instructor = new Instructor(req.body);
  await instructor.save();
  res.json(instructor);
});

module.exports = router;
