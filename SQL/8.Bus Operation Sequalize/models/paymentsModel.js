const { DataTypes } = require("sequelize");
const db = require("../utils/dbConnection");

const paymentsModel = db.define("payments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = paymentsModel;
