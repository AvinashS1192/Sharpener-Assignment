const express = require("express");
const controller = require("../controllers/studentController");

const router = express.Router();

router.post("/", controller.addStudent);
router.get("/", controller.getAllStudents);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);

module.exports = router;
