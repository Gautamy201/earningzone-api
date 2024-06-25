const express = require("express");
const router = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const rendomNo = Math.floor(Math.random() * 1000 + 1 * 2);

cloudinary.config({
  cloud_name: "drrztlamo",
  api_key: "578784667688752",
  api_secret: "W-XZEpWrP9lc2ZY69kLfFOc0edk", // Click 'View Credentials' below to copy your API secret
});

router.get("/", (req, res, next) => {
  User.find()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        users: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: `consection not stablish  ${error}`,
      });
    });
});

let redomNoGenrater = String(Date.now());
redomNoGenrater = redomNoGenrater.split("");
redomNoGenrater = redomNoGenrater.reduce(
  (pre, cur) => Number(pre) + Number(cur)
);
router.post("/", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    mobileNo: req.body.mobileNo,
    referCode: req.body.referCode,
    userId: `@${req.body.firstName}_${
      String(Date.now())
        .split("")
        .reduce((pre, cur) => Number(pre) + Number(cur)) *
      Math.floor(Math.random() * 1000 + 1 * 2)
    }`,
  });

  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newUser: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:user_id", (req, res, next) => {
  const id = req.params.user_id;
  User.findById(id)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        user: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: `consection not stablish  ${error}`,
      });
    });
});

router.delete("/:user_id", (req, res, next) => {
  const id = req.params.user_id;
  User.findOneAndDelete({ _id: id })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        user: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: `consection not stablish  ${error}`,
      });
    });
});

router.put("/:user_id", (req, res, next) => {
  const id = req.params.user_id;
  User.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
      },
    }
  )
    .then((result) => {
      console.log(result);
      res.status(200).json({
        user: result,
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
