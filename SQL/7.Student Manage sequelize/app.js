const express = require("express");
const dotenv = require("dotenv");
const studentRouter = require("./routes/studentRoute");
const db = require("./utils/connection");
const models = require("./models/studentModel");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/students", studentRouter);

app.use("*all", (req, res) => {
  res.send("<h1>404-PageNotFound</h1>");
});

db.sync()
  .then(() => {
    app.listen(process.env.port, () => {
      console.log(`server is running on http://localhost:${process.env.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
