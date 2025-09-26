const express = require("express");
const dotenv = require("dotenv");
const db = require("./utils/connection");
const models = require("./models");
const coursesModel = require("./models/courseModel");

dotenv.config();

const app = express();

app.use(express.json());

app.post("/student", async (req, res) => {
  console.log(req.body.student, req.body.department);
  const student = await models.studentModel.create(req.body.student);
  const department = await models.departmentModel.create({
    ...req.body.department,
    studentId: student.id,
  });
  res.status(201).json({ student, department });
});
app.post("/course", async (req, res) => {
  const course = await models.coursesModel.create(req.body);
  res.status(201).json(course);
});

app.get("/course", async (req, res) => {
  const studentId = req.body.student.id;
  const { course } = req.body;
  const student = models.studentModel.findByPk(studentId);
  const course1 = models.coursesModel.findAll({ where: { course } });

  student.addcoursesModel(course1);
  const updates = await models.studentModel.findByPk(studentId, {
    include: models.coursesModel,
  });

  res.status(200).json(updates);
});

app.get("/", (req, res) => {
  res.send("Express server is running!");
});

db.sync().then(() => {
  console.log("Db is synced");
  const PORT = process.env.port || 3000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
