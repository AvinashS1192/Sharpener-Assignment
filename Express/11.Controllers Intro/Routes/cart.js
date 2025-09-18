const express = require("express");
const route = express.Router();

route.get("/:userid", (req, res) => {
  const id = req.params.userid;
  res.send(`Fetching cart for user with ID: ${id}`);
});
route.post("/:userid", (req, res) => {
  const id = req.params.userid;
  res.send(`Fetching cart for user with ID: ${id}`);
});

module.exports = route;
