const express = require("express");
const controller = require("../Controller/controllers");
const route = express.Router();

route.get("/:userid", controller.cartController.getCartForUser);
route.post("/:userid", controller.cartController.addProductToCart);

module.exports = route;
