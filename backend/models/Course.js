
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Course", courseSchema);
