const { Sequelize } = require("sequelize");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const db = new Sequelize("apointment", "root", process.env.password, {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    db.authenticate().then(() => {
      console.log("DB is Connected");
    });
  } catch (error) {
    console.log(error);
  }
})();

module.exports = db;
