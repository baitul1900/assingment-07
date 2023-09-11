const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoose = require("mongoose");
const expressMongoSanitize = require("express-mongo-sanitize");
const expressRateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const validator = require("validator");
const mysql = require("mysql");
const router = require("./src/Routes/api");
const app = express();

app.use("/api", router); // Change this line

app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});
app.use(bodyParser.json());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressMongoSanitize());

const limiter = expressRateLimit({
  windowMs: 50 * 60 * 1000,
  max: 100,
});
app.use(limiter);

module.exports = app;
