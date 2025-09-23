const db = require("../utils/dbConnection");

const addNewBus = (req, res) => {
  const { number, totalSeats, availableSeats } = req.body;
  const addBusQuery =
    "insert into buses (busNumber,totalSeats,availableSeats) values(?,?,?)";

  db.execute(
    addBusQuery,
    [number, totalSeats, availableSeats],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.status(201).send(`new bus added with number: ${number}`);
      return;
    }
  );
};
const getAvailableSeats = (req, res) => {
  const seats = req.params.seats;

  const getSeatsQuery = "select * from buses where availableSeats>?";
  db.execute(getSeatsQuery, [seats], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send(result);
    return;
  });
};

module.exports = {
  addNewBus,
  getAvailableSeats,
};
