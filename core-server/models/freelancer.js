var mongoose = require("mongoose");

var freelancerSchema = new mongoose.Schema({
  name: String,
  state: String,
  city: String,
  yearsOfExperience: String,
  techStack: String,
  contact: String,
  currentCompany: String,
  resumeLink: String,
});

module.exports = mongoose.model("freelancer", freelancerSchema);
