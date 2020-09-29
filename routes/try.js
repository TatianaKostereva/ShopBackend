const promiseDecorator = require('../utils/promiseDecorator');
const path = require('path');
const sqlite3 = require('sqlite3').verbose()
const db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

db.serialize(async function (err) {
  const stmt = db.prepare("INSERT INTO reviews(product_id, stars) VALUES (?, ?)");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; i < 6; i++) {
      stmt.run([j, randomInt(0,5)]);
    }
  }
  const dbAll = promiseDecorator(db.all.bind(db));
  const reviews = await dbAll('SELECT * FROM reviews');

  console.log(reviews);
})

console.log(db);