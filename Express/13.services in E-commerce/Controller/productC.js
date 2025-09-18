const services = require("../Services/productServices");

const getAllProduct = (req, res) => {
  const productsList = services.getAllProductService();
  res.send(`Products: ${productsList}`);
};

const getProductById = (req, res) => {
  const name = services.getProductByIdService(req);
  res.send(`Product: ${name}`);
};

const addProduct = (req, res) => {
  const nextId = services.addProductService(req);
  res.status(200).send(`Product Id: ${nextId - 1}`);
};

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
};
