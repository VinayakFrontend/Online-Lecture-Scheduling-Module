const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get users by role (e.g. instructor)
router.get("/", async (req, res) => {
  const role = req.query.role;
  if (!role) return res.status(400).json({ message: "Role is required" });

  const users = await User.find({ role });
  res.json(users);
});

module.exports = router;
