const path = require("path");
let products = [];
let nextId = 1;

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "View", "productres.html"));
};

const getProductById = (req, res) => {
  const reqId = req.params.id;
  let name = "Product Not Found";
  products.forEach((product) => {
    if (product.id == reqId) {
      name = product.productname;
    }
  });
  res.send(`Product: ${name}`);
};

const addProduct = (req, res) => {
  const productname = req.body.productname;

  const product = {
    id: nextId,
    productname,
  };
  products.push(product);
  nextId++;
  res.status(200).send(`Product Id: ${nextId - 1}`);
};

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
};
