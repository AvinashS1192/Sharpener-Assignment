const { get } = require("../routes/studentsRoute");
const db = require("../utils/connection");

const addStudent = (req, res) => {
  const { name, email, age } = req.body;
  const insertQuery = "insert into students (name, email,age) values(?,?,?)";
  db.execute(insertQuery, [name, email, age], (err) => {
    if (err) {
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(201).send(`user :${name} added`);
  });
};

const getAllStudents = (req, res) => {
  const getAllQuery = "select * from students";
  db.execute(getAllQuery, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send(result);
    return;
  });
};

const getStudentById = (req, res) => {
  const id = req.params.id;
  const getStudentQuery = "select * from students where id=?";
  db.execute(getStudentQuery, [id], (err, result) => {
    if (err) {
      res.status(404).send(err.message);
      return;
      // result.findLast==0
    }
    res.status(200).send(result);
    return;
  });
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;

  const updateQuery = "update students set name=?,email=?,age=? where id=?";
  db.execute(updateQuery, [name, email, age, id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("student not found");
      db.end();
      return;
    }
    res.status(200).send(`updated details for student id ${id}`);
  });
};

const deleteStudent = (req, res) => {
  const id = req.params.id;
  const updateQuery = "delete from students where id=?";
  db.execute(updateQuery, [id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("student not found");
      db.end();
      return;
    }
    res.status(200).send(`deleted student with  id ${id}`);
  });
};

module.exports = {
  addStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
};
