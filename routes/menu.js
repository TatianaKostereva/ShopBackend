const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

/* GET menu listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const menu = await dbAll('select * from menu');
  res.json(menu);
});

module.exports = router;
