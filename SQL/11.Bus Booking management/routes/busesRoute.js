const express = require("express");
const contoller = require("../controller/controller");

const router = express.Router();

router.post("/", contoller.busesController.addNewBus);
router.get("/available/:seats", contoller.busesController.getAvailableSeats);
router.get("/:id/bookings", contoller.busesController.fetchAllBookingWithBus);

module.exports = router;
