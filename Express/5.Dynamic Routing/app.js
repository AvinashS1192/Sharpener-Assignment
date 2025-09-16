const express = require("express");

const port = 3000;
const app = express();

app.get("/welcome/:username", (req, res) => {
  const user = req.params.username;
  const role = req.query.role;

  res.send(`welcome ${user}, your role is ${role}`);
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:3000`);
});
