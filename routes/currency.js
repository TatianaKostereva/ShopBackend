const express = require('express');
const router = express.Router();
const path = require('path');
const promiseDecorator = require('../utils/promiseDecorator');

const sqlite3 = require('sqlite3').verbose()
const db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

/* GET currency listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const currency = await dbAll('SELECT currencyIcon FROM currency WHERE [id] = 1');

  res.json(currency);
});

module.exports = router;