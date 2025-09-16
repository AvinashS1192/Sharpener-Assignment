const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Here is the list of books!");
});
route.post("/", () => {
  res.send("Book has been added!");
});

module.exports = route;
