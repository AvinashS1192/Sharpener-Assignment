const express = require("express");
const controller = require("../controllers/studentController");

const router = express.Router();

router.post("/add", controller.addStudent);
router.put("/update/:id", controller.updateStudent);
router.delete("/delete/:id", controller.deleteStudent);

module.exports = router;
