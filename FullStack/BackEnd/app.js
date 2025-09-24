const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
const db = require("./utils/connection");
const model = require("./models/usersModel");
const usersRoute = require("./routes/usersRoute");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoute);

app.use("*all", (req, res) => {
  res.status(404).send("Route not found");
});

const port = 3000;

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
