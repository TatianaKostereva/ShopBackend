const promiseDecorator = require('../utils/promiseDecorator');
const path = require('path');
const sqlite3 = require('sqlite3').verbose()
const db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(async function (err) {
  const dbAll = promiseDecorator(db.all.bind(db));

  const rows = await dbAll('SELECT * FROM users');
  const products = await dbAll('SELECT * FROM products');

  console.log(products);
})

console.log(db);