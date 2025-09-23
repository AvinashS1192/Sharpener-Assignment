const express = require("express");
const dotenv = require("dotenv");
const db = require("./utils/connection");
const studentRouter = require("./routes/studentsRoute");

const app = express();
dotenv.config();
app.use(express.json());

app.use("/students", studentRouter);

app.use("*all", (req, res) => {
  res.send("<h1>404-PageNotFound</h1>");
});

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is runnign on http://localhost:${port}`);
});
