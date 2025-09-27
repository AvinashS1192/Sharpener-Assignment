const express = require("express");
const contoller = require("../controller/controller");

const router = express.Router();

router.post("/", contoller.usersController.addNewUser);
router.get("/", contoller.usersController.getAllUsers);
router.get("/:id/bookings", contoller.usersController.fetchAllBookingWithusers);

module.exports = router;
