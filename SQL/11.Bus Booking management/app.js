const express = require("express");
const dotenv = require("dotenv");
const db = require("./utils/dbConnection");
const models = require("./models/models");
const routes = require("./routes/routes");
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.port;

app.use("/users", routes.usersRoute);
app.use("/buses", routes.busesRoutes);
app.use("/bookings", routes.bookingsRoutes);

app.use("*all", (req, res) =>
  res.status(404).send("<h1>404-PageNotFound</h1>")
);

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`the server running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("error while syncing the DB");
  });
