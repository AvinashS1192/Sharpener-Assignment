const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = 3000;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "testdb",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("DB is Connected");
  }

  const creation = `CREATE TABLE Students(
  id INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(50),
  Email VARCHAR(50)
  )`;
  connection.execute(creation, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    } else {
      console.log("table created");
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
