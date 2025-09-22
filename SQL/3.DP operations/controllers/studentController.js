const db = require("../utils/connection");

const addStudent = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = "insert into students (name, email) values(?,?)";
  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(201).send(`user :${name} added`);
  });
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  const updateQuery = "update students set name=?,email=? where id=?";
  db.execute(updateQuery, [name, email, id], (err, result) => {
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

module.exports = { addStudent, updateStudent, deleteStudent };
