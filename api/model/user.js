const mongoose = require("mongoose");

const rendonNo = Math.floor(Math.random() * 10 + 1 * 2);
let redomNoGenrater = String(Date.now());
console.log(rendonNo);
redomNoGenrater = redomNoGenrater.split("");
redomNoGenrater = redomNoGenrater.reduce(
  (pre, cur) => Number(pre) + Number(cur)
);

const setDate = new Date(2000, 1, 1, 12).toLocaleDateString;

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
    default: "@" + "firstName" + "_" + redomNoGenrater,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  dateOfBirth: {
    type: Date,
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
