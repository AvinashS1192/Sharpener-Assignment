const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("DB connected");
});

const userTableCreation =
  "create table if not exists users(id int auto_increment primary key,name varchar(100), email varchar(100))";
const busTableCreation =
  "create table if not exists buses(id int auto_increment primary key,busNumber int ,totalSeats int , availableSeats int)";
const queries = [userTableCreation, busTableCreation];

queries.forEach((q) => {
  connection.query(q, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`table created`);
  });
});

module.exports = connection;
