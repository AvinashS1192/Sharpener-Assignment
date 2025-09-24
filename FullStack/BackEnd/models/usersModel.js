const { DataTypes } = require("sequelize");
const db = require("../utils/connection");

const userModel = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = userModel;
