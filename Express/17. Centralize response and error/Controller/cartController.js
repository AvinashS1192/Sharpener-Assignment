const { sendErrorResponse, sendResponse } = require("../Utils/response");

const getCartForUser = (req, res) => {
  try {
    const id = req.params.userid;
    if (!id) {
      let err = new Error("No cart found for this user");
      err.status = 404;
      throw err;
    }
    return sendResponse(res, `Fetching cart for user with ID: ${id}`, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addProductToCart = (req, res) => {
  try {
    const id = req.params.userid;
    if (!id) {
      let err = new Error("user Id is required");
      err.status = 403;
      throw err;
    }
    return sendResponse(res, "Item Added to cart", 201);
  } catch (err) {
    return sendErrorResponse(res, err);
  }

  res.send(`Fetching cart for user with ID: ${id}`);
};

module.exports = {
  getCartForUser,
  addProductToCart,
};
