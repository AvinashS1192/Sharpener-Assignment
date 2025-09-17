const express = require("express");

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

const router = express.Router();

router.get("/", (req, res) => {
  const names = courses
    .map((course) => {
      return course.name;
    })
    .join(", ");
  res.send(`Courses: ${names}`);
});

router.get("/:id", (req, res) => {
  const reqId = req.params.id;
  let cours = "Course not found";
  let des = "";
  courses.forEach((course) => {
    if (course.id == reqId) {
      cours = course.name;
      des = course.description;
    }
  });

  des == ""
    ? res.send(`Students: ${cours}`)
    : res.send(`Students: ${cours}, Description: ${des}`);
});

module.exports = router;
