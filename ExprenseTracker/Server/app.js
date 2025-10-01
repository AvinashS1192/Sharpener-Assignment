const express = require("express");
const dotenv = require("dotenv");
const db = require("./Utils/connection");
const expense = require("./Models/expense");
const expenseRoute = require("./Routes/expenseRoute");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use("/expense", expenseRoute);

app.use("*all", (req, res) => {
  res.status(200).send("<h1>404-PageNotFound</h1>");
});

db.sync()
  .then(() => {
    app.listen(process.env.port, () => {
      console.log(` server is running on http://localhost:${process.env.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
