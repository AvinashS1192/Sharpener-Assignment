const express = require("express");

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

const router = express.Router();

router.get("/", (req, res) => {
  const names = students
    .map((student) => {
      return student.name;
    })
    .join(", ");
  res.send(`Students: ${names}`);
});

router.get("/:id", (req, res) => {
  const reqId = req.params.id;
  let name = "Student not found";
  students.forEach((student) => {
    if (student.id == reqId) {
      name = student.name;
    }
  });

  res.send(`Students: ${name}`);
});

module.exports = router;
