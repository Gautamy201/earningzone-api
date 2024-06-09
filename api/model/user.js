const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  userId: String,
  email: String,
  img: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
