const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const db = new Sequelize("expense_tracker", "root", process.env.password, {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await db.authenticate();
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = db;
