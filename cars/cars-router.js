const express = require('express');

const db = require('../data/connection.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Unable to retrieve cars.' })
    );
});

router.post('/', (req, res) => {
  const newCar = req.body;
  db('cars')
    .insert(newCar)
    .then((ids) => {
      db('cars')
        .where({ id: ids[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch((err) =>
      res.status(500).json({ message: 'Failed to store car data.' })
    );
});

module.exports = router;
