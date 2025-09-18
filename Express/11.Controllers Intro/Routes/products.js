const express = require("express");
const controller = require("../Controller/controllers");
const route = express.Router();

let products = [];
let nextId = 1;

route.get("/", controller.productController.getProduct);
route.get("/:id", controller.productController.getProductById);
route.post("/", controller.productController.postProduct);

module.exports = route;
