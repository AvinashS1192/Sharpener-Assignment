const express = require("express");
const db = require("./utils/connection");
const students = require("./models/students");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("server is running on http://localhost:3000");
    });
  })
  .catch((err) => {});
