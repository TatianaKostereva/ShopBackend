const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

/* GET reviews listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const reviews = await dbAll('SELECT * FROM reviews');

  res.json(reviews);
});

/* GET reviews listing by id. */
async function init() {
  router.get('/get_by_product/:id', async function(req, res, next) {
    const dbGet = promiseDecorator(db.all.bind(db));
    const id = req.params.id;
    const reviews = await dbGet(`SELECT * FROM reviews WHERE product_id=${id}`);

    res.json(reviews);
  });
}

init().then(() => {
  console.log('reviews init');
});

module.exports = router;
