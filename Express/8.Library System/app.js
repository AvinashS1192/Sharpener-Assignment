const express = require("express");
const route = require("./routes/routes.js");
const port = 3000;
const app = express();

app.use("/books", route.bookRoute);

app.use("*all", (req, res) => {
  res.send("<h1>404-Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
