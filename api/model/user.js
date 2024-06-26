const mongoose = require("mongoose");

const setDate = new Date(2000, 1, 1, 12);

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  mobileNo: String,
  referCode: String,
  userId: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  dateOfBirth: {
    type: String,
    default: setDate,
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
