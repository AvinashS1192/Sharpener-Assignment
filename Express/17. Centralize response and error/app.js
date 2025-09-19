const express = require("express");
const routes = require("./Routes/routes");

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/users", routes.usersRoute);
app.use("/products", routes.productsRoute);
app.use("/cart", routes.cartRoute);

app.use("*all", (req, res) => {
  res.send("<h1>404- Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
