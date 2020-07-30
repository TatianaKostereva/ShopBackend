const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

db.serialize(function (err) {
  const dbAll = promiseDecorator(db.all.bind(db));
  dbAll('SELECT * FROM users').then((row) => {
    console.log(row, err);
  })
})

console.log(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!')
});

module.exports = router;
