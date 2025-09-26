const { Sequelize } = require("sequelize");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const db = new Sequelize("testdb2", "root", process.env.password, {
  host: "localhost",
  dialect: "mysql",
});
(async () => {
  try {
    await db.authenticate();
    console.log("Db is connected");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = db;
