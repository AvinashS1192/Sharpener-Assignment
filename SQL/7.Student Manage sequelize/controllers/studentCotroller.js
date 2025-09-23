const db = require("../utils/connection");
const students = require("../models/studentModel");

const addStudent = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const student = await students.create({
      name,
      email,
      age,
    });

    res.status(200).send(`added student with name: ${name}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const users = await students.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await students.findByPk(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(err.message);
  }
};

const updateStudent = async (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  try {
    const user = await students.update({ name, email, age }, { where: { id } });
    res.status(200).send(`updated details for student id ${id}`);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const user = students.destroy({ where: { id } });
    res.status(200).send(`deleted student with  id ${id}`);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  addStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
};
