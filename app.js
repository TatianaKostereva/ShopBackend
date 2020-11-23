const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const queryString = require('query-string');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const reviewsRouter = require('./routes/reviews');
const currencyRouter = require('./routes/currency');
const slidesRouter = require('./routes/slides');
const menuRouter = require('./routes/menu');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/reviews', reviewsRouter);
app.use('/currency', currencyRouter);
app.use('/slides', slidesRouter);
app.use('/menu', menuRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
// queryString.parse('foo[0]=1&foo[1]=2&foo[3]=3', {arrayFormat: 'index'});
// queryString.parse('foo=1,2,3', {arrayFormat: 'comma'});
// queryString.parse('foo=1|2|3', {arrayFormat: 'separator', arrayFormatSeparator: '|'});
// queryString.parse('foo=1&foo=2&foo=3');
// queryString.parse('foo=1', {parseNumbers: true});
// queryString.parse('foo=true', {parseBooleans: true});
// queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'bracket'});
// queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'index'});
// queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'comma'});
// queryString.stringify({foo: [1, 2, 3]});

module.exports = app;
