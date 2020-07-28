const getRouter = require('../utils/getRouter');

const router = getRouter();

// const express = require('express');
// const router = express.Router();
// const path = require('path');
//
// const sqlite3 = require('sqlite3').verbose()
// const db =  new sqlite3.Database(path.resolve(__dirname, '../db.db'), (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the chinook database.');
// });
//
// db.serialize(function (err) {
//   db.all('SELECT * FROM users', function (err, rows) {
//     rows.forEach((row) => {
//       router.get(`/${row.id}`, function(req, res, next) {
//         res.send('Пользователь: ' + row.name);
//       });
//     })
//   })
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user');
});

router.get('/all', function(req, res, next) {
  res.send('all user');
});

module.exports = router;
