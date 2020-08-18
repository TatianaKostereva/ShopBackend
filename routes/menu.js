const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

/* GET menu listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const menu = await dbAll('select * from menu join menu_children using(menu_id)');
  const children = await dbAll('select * from children');

  res.json(menu);
});

module.exports = router;
