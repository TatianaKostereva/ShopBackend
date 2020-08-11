const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

/* GET products listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const products = await dbAll('SELECT * FROM products');

  res.json(products);
});

/* GET products listing from start to end */
async function choice() {
  router.get('/:start/:end', async function(req, res, next) {
    const dbGet = promiseDecorator(db.all.bind(db));
    const start = req.params.start;
    const end = req.params.end;
    const products = await dbGet(`SELECT * FROM products WHERE id BETWEEN ${start} AND ${end}`);

    res.json(products);
  });
}

choice().then(() => {
  console.log('products choice');
});

module.exports = router;
