const express = require("express");
const router = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

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
router.post("/", (req, res, next) => {
  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, (err, img) => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userId: req.body.userId,
      email: req.body.email,
      password: req.body.password,
      img: img.url,
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
        userId: req.body.userId,
        email: req.body.email,
        password: req.body.password,
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
