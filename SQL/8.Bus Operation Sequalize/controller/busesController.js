const db = require("../utils/dbConnection");
const models = require("../models/models");
const { Op } = require("sequelize");

const addNewBus = async (req, res) => {
  try {
    const { number, totalSeats, availableSeats } = req.body;
    const bus = await models.busesModel.create({
      number,
      totalSeats,
      availableSeats,
    });
    res.status(201).send(`new bus added with number: ${number}`);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAvailableSeats = async (req, res) => {
  const seats = req.params.seats;
  try {
    const buses = await models.busesModel.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });
    res.status(200).send(buses);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addNewBus,
  getAvailableSeats,
};
