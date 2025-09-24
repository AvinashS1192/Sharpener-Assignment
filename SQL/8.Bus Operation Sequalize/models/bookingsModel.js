const { DataTypes } = require("sequelize");
const db = require("../utils/dbConnection");

const bookingsModel = db.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = bookingsModel;
