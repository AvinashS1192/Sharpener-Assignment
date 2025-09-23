const express = require("express");
const contoller = require("../controller/controller");

const router = express.Router();

router.post("/", contoller.usersController.addNewUser);
router.get("/", contoller.usersController.getAllUsers);

module.exports = router;
