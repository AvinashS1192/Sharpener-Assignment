const db = require("../utils/dbConnection");

const getAllUsers = (req, res) => {
  const getUserQuery = "select * from users";
  db.execute(getUserQuery, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send(result);
    return;
  });
};

const addNewUser = (req, res) => {
  const { name, email } = req.body;
  const addUserQuery = "insert into users (name,email) values(?,?) ";
  db.execute(addUserQuery, [name, email], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(201).send(`added user with name: ${name}`);
    return;
  });
};
module.exports = {
  getAllUsers,
  addNewUser,
};
