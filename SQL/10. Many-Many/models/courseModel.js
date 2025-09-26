const { DataTypes } = require("sequelize");
const db = require("../utils/connection");

const coursesModel = db.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = coursesModel;
