const express = require("express");
const dotenv = require("dotenv");
const db = require("./utils/connection");
const models = require("./models");

dotenv.config();

const app = express();

app.use(express.json());

app.post("/data", async (req, res) => {
  console.log(req.body.student, req.body.department);
  const student = await models.studentModel.create(req.body.student);
  const department = await models.departmentModel.create({
    ...req.body.department,
    studentId: student.id,
  });
  res.status(201).json({ student, department });
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
