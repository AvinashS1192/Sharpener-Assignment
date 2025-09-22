const sql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");

// load .env from this folder explicitly to avoid surprises
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "testdb2",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("DB is Connected");
});

const tableCreationQuery =
  "create table if not exists students(id int auto_increment primary key , name varchar(30), email varchar(50))";

connection.execute(tableCreationQuery, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Table students Created");
});

module.exports = connection;
