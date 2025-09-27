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

const fetchAllBookingWithusers = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(await models.bookingsModel.findByPk(id));
    const result = await models.bookingsModel.findAll({
      where: {
        userId: id,
      },
      attributes: ["id", "seatNumber"],
      include: [
        {
          model: models.busesModel,
          attributes: ["number"],
        },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllUsers,
  addNewUser,
  fetchAllBookingWithusers,
};
