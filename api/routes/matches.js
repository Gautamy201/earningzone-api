const express = require("express");
const router = express.Router();
const Matches = require("../model/matches");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  Matches.find()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        matches: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: `consection not stablish  ${error}`,
      });
    });
});

router.post("/", (req, res) => {
  const matches = new Matches({
    _id: new mongoose.Types.ObjectId(),
    matchTitle: req.body.matchTitle,
    matchTime: req.body.matchTime,
    matchDate: req.body.matchDate,
    matchPricePool: req.body.matchPricePool,
    matchPerKill: req.body.matchPerKill,
    matchPlayFor: req.body.matchPlayFor,
    matchType: req.body.matchType,
    matchVersion: req.body.matchVersion,
    matchMap: req.body.matchMatch,
  });

  matches
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newMatches: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:matches_id", (req, res) => {
  const id = req.params.matches_id;
  Matches.findById(id)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        matche: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: `consection not stablish  ${error}`,
      });
    });
});
module.exports = router;
