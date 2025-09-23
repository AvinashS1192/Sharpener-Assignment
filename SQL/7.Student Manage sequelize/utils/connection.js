const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });
// console.log(process.env.password);

const db = new Sequelize("testdb", "root", process.env.password, {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await db.authenticate();
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = db;
