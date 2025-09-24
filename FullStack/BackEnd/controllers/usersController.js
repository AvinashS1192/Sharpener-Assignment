const users = require("../models/usersModel");

const getAllUsers = async (req, res) => {
  try {
    const result = await users.findAll();
    // console.log(result);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addNewUser = async (req, res) => {
  const { name, number, email } = req.body;
  // console.log(number);
  // console.log(email);
  // console.log(name);
  try {
    const user = await users.create({ name, number, email });
    res.status(201).json({
      id: user.id,
      name: user.name,
      number: user.number,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, number, email } = req.body;
  try {
    const [updated] = await users.update(
      { name, number, email },
      { where: { id } }
    );
    if (updated) {
      const updatedUser = await users.findOne({ where: { id } });
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: `User with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await users.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: `User with id ${id} deleted` });
    } else {
      res.status(404).json({ message: `User with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  updateUserById,
  deleteUserById,
};
