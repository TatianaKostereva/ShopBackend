var express = require('express');
var path = require('path');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose()
var db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(function (err) {
  db.all('SELECT * FROM users', function (err, row) {
    console.log(row, err);
    // console.log(row.id + ': ' + row.name)
  })
})



console.log(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
