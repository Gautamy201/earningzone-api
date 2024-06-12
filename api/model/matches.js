const mongoose = require("mongoose");

const matchesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  matchTitle: {
    type: String,
    default: "Welcome To BGMI - Match",
  },
  matchTime: {
    type: String,
    require: true,
  },
  matchDate: {
    type: String,
    require: true,
  },
  matchPricePool: {
    type: Number,
    require: true,
  },
  matchPerKill: {
    type: Number,
    require: true,
  },
  matchPlayFor: {
    type: String,
    require: true,
  },
  matchType: {
    type: String,
    require: true,
  },
  matchVersion: {
    type: String,
    require: true,
  },
  matchMap: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Matches", matchesSchema);
