const mongoose = require("mongoose");

const setDate = new Date();

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  mobileNo: String,
  referCode: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
  dateOfBirth: {
    type: Date,
    default: setDate.setFullYear(2000, 0, 1),
  },
  gender: {
    type: String,
    default: "Other",
  },
  wallet: {
    type: String,
    default: "10",
  },
});

module.exports = mongoose.model("User", userSchema);
