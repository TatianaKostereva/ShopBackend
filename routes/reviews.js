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


async function init() {
  router.get('/get_by_product/:id', async function(req, res, next) {
    const dbGet = promiseDecorator(db.all.bind(db));
    const id = req.params.id;
    const reviews = await dbGet(`SELECT * FROM reviews WHERE product_id=${id}`);

    console.log(reviews)
    res.json(reviews);
  });
}

init().then(() => {
  console.log('reviews init');
})
/* GET products listing. */


module.exports = router;
