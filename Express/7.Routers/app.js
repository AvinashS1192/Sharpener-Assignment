const express = require("express");

const routes = require("./routes/routes.js");

const port = 4000;
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use("/products", routes.productRoute);

app.use("/categories", routes.categoriesRoute);

app.use("*all", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
