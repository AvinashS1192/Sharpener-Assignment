const express = require("express");

const app = express();
const port = 3000;

app.use("/welcome", (req, res, next) => {
  req.user = "guest";
  next();
});
app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
  console.log("servcer is running on http://localhost:3000");
});
