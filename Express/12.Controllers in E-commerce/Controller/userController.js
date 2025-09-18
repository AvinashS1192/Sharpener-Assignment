let users = [];
let nextId = 1;

const getAllUsers = (req, res) => {
  const usersList = users.map((user) => user.username).join(", ");

  res.send(`Users: ${usersList}`);
};

const getUserById = (req, res) => {
  const reqId = req.params.id;
  let name = "User Not Found";
  users.forEach((user) => {
    if (user.id == reqId) {
      name = user.username;
    }
  });
  res.send(`User: ${name}`);
};

const addUser = (req, res) => {
  const username = req.body.username;

  const user = {
    id: nextId,
    username,
  };
  users.push(user);
  nextId++;
  res.status(200).send(`User Id: ${nextId - 1}`);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
