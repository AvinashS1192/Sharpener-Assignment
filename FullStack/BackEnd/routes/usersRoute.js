const express = require("express");
const controllers = require("../controllers/usersController");

const router = express.Router();

router.get("/", controllers.getAllUsers);
router.post("/", controllers.addNewUser);
router.put("/:id", controllers.updateUserById);
router.delete("/:id", controllers.deleteUserById);

module.exports = router;
