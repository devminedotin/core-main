var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  contact: String,
  query: String,
});

module.exports = mongoose.model("user", userSchema);
