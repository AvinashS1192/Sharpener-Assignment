const path = require("path");
const { sendErrorResponse, sendResponse } = require("../Utils/response");
let products = [];
let nextId = 1;

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "View", "productres.html"));
};

const getProductById = (req, res) => {
  try {
    const reqId = req.params.id;
    if (!reqId) {
      let err = new Error("product not found");
      err.status = 404;
      throw err;
    }

    let name = "";
    products.forEach((product) => {
      if (product.id == reqId) {
        name = product.productname;
      }
    });

    if (name == "") {
      let err = new Error("No User Found");
      err.status = 404;
      throw err;
    }

    sendResponse(res, `Product:${name}`, 200);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const addProduct = (req, res) => {
  try {
    const productname = req.body.productname;
    if (!productname || productname == "") {
      let err = new Error("usernamme is required");
      err.stack = 403;
      throw err;
    }
    const user = {
      id: nextId,
      productname,
    };
    products.push(user);
    nextId++;
    sendResponse(res, `product id: ${nextId - 1}`, 201);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
};
