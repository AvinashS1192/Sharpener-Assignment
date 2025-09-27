const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const connection = new Sequelize(
  "bus_management",
  "root",
  process.env.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
(async () => {
  try {
    await connection.authenticate();
    console.log("DB is Connected");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = connection;
