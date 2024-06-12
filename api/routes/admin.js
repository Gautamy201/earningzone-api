const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    adminId: "master2011",
    password: "master9919652089",
  });
});

module.exports = router;
