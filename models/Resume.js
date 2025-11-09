const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  title: String,
  summary: String,
  skills: [String],
  education: [
    {
      institution: String,
      degree: String,
      year: String,
    },
  ],
});

module.exports = mongoose.model("Resume", resumeSchema);
