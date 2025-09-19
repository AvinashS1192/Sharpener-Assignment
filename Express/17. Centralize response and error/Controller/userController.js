const { sendResponse, sendErrorResponse } = require("../Utils/response");

let users = [];
let nextId = 1;

const getAllUsers = (req, res) => {
  const usersList = users.map((user) => user.username).join(", ");

  res.send(`Users: ${usersList}`);
};

const getUserById = (req, res) => {
  try {
    const reqId = req.params.id;
    if (!reqId) {
      let err = new Error("id not found");
      err.status = 404;
      throw err;
    }
    let name = "";
    users.forEach((user) => {
      if (user.id == reqId) {
        name = user.username;
      }
    });
    if (name == "") {
      let err = new Error("No User Found");
      err.status = 404;
      throw err;
    }

    sendResponse(res, `user:${name}`, 200);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

const addUser = (req, res) => {
  try {
    const username = req.body.username;
    if (!username || username == "") {
      let err = new Error("usernamme is required");
      err.stack = 403;
      throw err;
    }
    const user = {
      id: nextId,
      username,
    };
    users.push(user);
    nextId++;
    sendResponse(res, `User Id: ${nextId - 1}`, 201);
  } catch (err) {
    sendErrorResponse(res, err);
  }

  // res.status(200).send(`User Id: ${nextId - 1}`);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
