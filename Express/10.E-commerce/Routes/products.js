const express = require("express");

const route = express.Router();

let products = [];
let nextId = 1;

route.get("/", (req, res) => {
  const productsList = products
    .map((product) => product.productname)
    .join(", ");

  res.send(`Products: ${productsList}`);
});
route.get("/:id", (req, res) => {
  const reqId = req.params.id;
  let name = "Product Not Found";
  products.forEach((product) => {
    if (product.id == reqId) {
      name = product.productname;
    }
  });
  res.send(`Product: ${name}`);
});
route.post("/", (req, res) => {
  const productname = req.body.productname;

  const product = {
    id: nextId,
    productname,
  };
  products.push(product);
  nextId++;
  res.status(200).send(`Product Id: ${nextId - 1}`);
});

module.exports = route;
