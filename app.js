const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const userRoutes = require("./api/routes/user");
const matchesRouter = require("./api/routes/matches");
const adminRouter = require("./api/routes/admin");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUplode = require("express-fileupload");

mongoose.connect(
  "mongodb+srv://gautamy123:Gautamy123@tornament.msfoakm.mongodb.net/gautamy123?retryWrites=true&w=majority&appName=Tornament"
);
mongoose.connection.on("error", (err) => {
  console.log("connection error");
});

mongoose.connection.on("connected", (connected) => {
  console.log("connected with database...");
});

app.use(
  fileUplode({
    useTempFiles: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);

app.use("/matches", matchesRouter);

app.use("/admin", adminRouter);

app.use((req, res, next) => {
  res.status(400).json({
    error: "Bad Request",
  });
});

module.exports = app;
