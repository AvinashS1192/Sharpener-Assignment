const studentModel = require("./studentsModel");
const departmentModel = require("./departmentModel");

departmentModel.hasMany(studentModel);
studentModel.belongsTo(departmentModel);

module.exports = {
  studentModel,
  departmentModel,
};
