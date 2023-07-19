var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  state: String,
  city: String,
  contact: String,
  query: String,
});

module.exports = mongoose.model("user", userSchema);
