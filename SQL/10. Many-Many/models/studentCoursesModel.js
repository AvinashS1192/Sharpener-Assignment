const { DataTypes } = require("sequelize");
const db = require("../utils/connection");

const studentCoursesModel = db.define("studentCourses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = studentCoursesModel;
