const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: String,
  time: String,
  firstName: String,
  lastName: String,
  userId: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
