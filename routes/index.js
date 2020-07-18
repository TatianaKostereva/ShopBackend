const express = require('express');
const promiseDecorator = require('../utils/promiseDecorator');
const path = require('path');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose()
const db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(function (err) {
  const dbAll = promiseDecorator(db.all.bind(db));
  dbAll('SELECT * FROM users').then((row) => {
    console.log(row, err);
  })
})

console.log(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!')
});

module.exports = router;
