let products = [];
let nextId = 1;

const getAllProductService = () => {
  const productsList = products
    .map((product) => product.productname)
    .join(", ");
  return productsList;
};

const getProductByIdService = (req) => {
  const reqId = req.params.id;
  let name = "Product Not Found";
  products.forEach((product) => {
    if (product.id == reqId) {
      name = product.productname;
    }
  });
  return name;
};
const addProductService = (req) => {
  const productname = req.body.productname;

  const product = {
    id: nextId,
    productname,
  };
  products.push(product);
  nextId++;
  return nextId;
};

module.exports = {
  getAllProductService,
  getProductByIdService,
  addProductService,
};
