const express = require("express");
const controller = require("../Controller/controllers");
const route = express.Router();

route.get("/", controller.productController.getAllProduct);
route.get("/:id", controller.productController.getProductById);
route.post("/", controller.productController.addProduct);

module.exports = route;
