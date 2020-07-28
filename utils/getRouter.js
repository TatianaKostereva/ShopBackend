const getRouter = () => {
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

  return router;
}

module.exports = getRouter;