const { where } = require("sequelize");
const expenses = require("../Models/expense");
const { get } = require("../Routes/expenseRoute");

const getAllExpenses = async (req, res) => {
  try {
    const result = await expenses.findAll();

    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    // console.log(error);
    res.status(500);
  }
};

const addNewExpense = async (req, res) => {
  try {
    const { name, amount } = req.body;
    const result = await expenses.create({ name, amount });
    // console.log(result);
    res.status(201).json(result);
  } catch (error) {
    // console.log(error);
    res.status(500);
  }
};

const editExpense = async (req, res) => {
  try {
    const id = req.params;
    const { name, amount } = req.body;
    const result = await expenses.update({ name, amount }, { where: { id } });
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    // console.log(error);
    res.status(500);
  }
};
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const result = expenses.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getAllExpenses,
  addNewExpense,
  editExpense,
  deleteExpense,
};
