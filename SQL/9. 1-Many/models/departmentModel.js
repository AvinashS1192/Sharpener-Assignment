const { DataTypes } = require("sequelize");
const db = require("../utils/connection");

const departmentModel = db.define("department", {
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
module.exports = departmentModel;
