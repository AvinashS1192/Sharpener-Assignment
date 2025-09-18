const express = require("express");

const route = express.Router();

let users = [];
let nextId = 1;

route.get("/", (req, res) => {
  const usersList = users.map((user) => user.username).join(", ");

  res.send(`Users: ${usersList}`);
});
route.get("/:id", (req, res) => {
  const reqId = req.params.id;
  let name = "User Not Found";
  users.forEach((user) => {
    if (user.id == reqId) {
      name = user.username;
    }
  });
  res.send(`User: ${name}`);
});
route.post("/", (req, res) => {
  const username = req.body.username;

  const user = {
    id: nextId,
    username,
  };
  users.push(user);
  nextId++;
  res.status(200).send(`User Id: ${nextId - 1}`);
});

module.exports = route;
