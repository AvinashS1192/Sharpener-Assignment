const express = require("express");
const controller = require("../Controller/expenseController");
const router = express.Router();

router.get("/", controller.getAllExpenses);
router.post("/", controller.addNewExpense);
router.put("/:id", controller.editExpense);
router.delete("/:id", controller.deleteExpense);

module.exports = router;
