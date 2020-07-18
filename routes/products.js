const express = require('express');
const router = express.Router();
const path = require('path');

const sqlite3 = require('sqlite3').verbose()
const db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(function (err) {
  db.all('SELECT * FROM products', function (err, rows) {
    rows.forEach((row) => {
      router.get(`/${row.id}`, function(req, res, next) {
        res.send(`
           Название:${row.title} \n\r
           Цена:${row.price}
        `);
      });
    })
  })
})

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const products = await dbAll('SELECT * FROM products');

  res.json(products);
});

module.exports = router;
