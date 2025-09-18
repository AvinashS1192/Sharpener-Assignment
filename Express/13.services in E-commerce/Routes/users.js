const express = require("express");
const controller = require("../Controller/controllers");
const route = express.Router();

route.get("/", controller.userController.getAllUsers);
route.get("/:id", controller.userController.getUserById);
route.post("/", controller.userController.addUser);

module.exports = route;
