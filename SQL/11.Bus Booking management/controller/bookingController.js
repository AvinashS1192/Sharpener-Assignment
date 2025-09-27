const { Model } = require("sequelize");
const booking = require("../models/bookingsModel");
const user = require("../models/usersModel");
const db = require("../utils/dbConnection");

const createBooking = async (req, res) => {
  const { userId } = req.body;
  const { busId } = req.body;
  const { seatNumber } = req.body;

  const book = await booking.create({
    seatNumber,
    busId,
    userId,
  });

  res.status(200).json(book);
};

// const fetchAllBookingWithBus = async (req, res) => {
//   const id = req.params.id;
//   const result = await booking.findAll({
//     where: {
//       id,
//       include: {
//         Model: booking,
//       },
//     },
//   });
// };

// const fetchAllBookingWithusers = async (req, res) => {
//   const id = req.params.id;
//   const result = await booking.findAll({
//     where: {
//       id,
//       include: {
//         Model: user,
//       },
//     },
//   });
// };

module.exports = {
  createBooking,
  //   fetchAllBookingWithBus,
  //   fetchAllBookingWithusers,
};
