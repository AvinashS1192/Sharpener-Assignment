const db = require("../utils/dbConnection");
const models = require("../models/models");

const getAllUsers = async (req, res) => {
  try {
    const users = await models.usersModel.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addNewUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await models.usersModel.create({
      name,
      email,
    });
    res.status(201).send(`added user with name: ${name}`);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getAllUsers,
  addNewUser,
};
