const express = require('express');
const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');

const router = getRouter();
const db = getDB();

db.serialize(function (err) {
  db.all('SELECT * FROM users', function (err, rows) {
    rows.forEach((row) => {
      router.get(`/${row.id}`, function(req, res, next) {
        res.send('Пользователь: ' + row.name);
      });
    })
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user');
});

router.get('/all', function(req, res, next) {
  res.send('all user');
});

module.exports = router;
