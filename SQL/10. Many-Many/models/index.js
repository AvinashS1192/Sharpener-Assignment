const studentModel = require("./studentsModel");
const departmentModel = require("./departmentModel");
const coursesModel = require("./courseModel");
const studentCoursesModel = require("./studentCoursesModel");

departmentModel.hasMany(studentModel);
studentModel.belongsTo(departmentModel);

studentModel.belongsToMany(coursesModel, { through: studentCoursesModel });
coursesModel.belongsToMany(studentModel, { through: studentCoursesModel });

module.exports = {
  studentModel,
  departmentModel,
  coursesModel,
  studentCoursesModel,
};
