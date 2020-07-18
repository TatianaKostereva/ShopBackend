const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
const promiseDecorator = (func) => {
  return (...arg) => {
    return new Promise((resolve, reject) => {
      func(...arg, (err, ...result) => {
        if (err) {
          reject(err);
        }

        resolve(...result)
      })
    })
  }
};

module.exports = promiseDecorator;
