const usersModel = require("./usersModel");
const paymentsModel = require("./paymentsModel");
const busesModel = require("./busesModel");
const bookingsModel = require("./bookingsModel");

//user has many bookings
usersModel.hasMany(bookingsModel);
bookingsModel.belongsTo(usersModel);

busesModel.hasMany(bookingsModel);
bookingsModel.belongsTo(busesModel);

module.exports = {
  usersModel,
  busesModel,
  paymentsModel,
  bookingsModel,
};
