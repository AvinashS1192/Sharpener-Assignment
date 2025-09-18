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
  const productname = req.body.productName;

  res.status(200).json({ value: productname });
};

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
};
