const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "testdb2",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    connection.end();
  }
  console.log("DB connected");
});

const userTableCreation =
  "create table users(id int auto_increment primary key,name varchar(100), email varchar(100))";
const busTableCreation =
  "create table buses(id int auto_increment primary key,busNumber int ,totalSeats int , availableSeats int)";
const bookingTableCreation =
  "create table bookings (id int auto_increment primary key,seatNumber int)";
const paymentTableCreation =
  "create table payments (id int auto_increment primary key, amountPaid int ,paymentSatus varchar(20))";
const queries = [
  userTableCreation,
  busTableCreation,
  bookingTableCreation,
  paymentTableCreation,
];

queries.forEach((q) => {
  connection.query(q, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`table created`);
  });
});
