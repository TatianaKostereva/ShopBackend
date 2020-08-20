const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

/* GET reviews listing */
async function init() {
  const dbGet = promiseDecorator(db.all.bind(db));

  router.get('/load_by_ids/', async function(req, res, next) {
    const ids = Array.isArray(req.query.ids) ? req.query.ids : [req.query.ids];
    const reviews = await dbGet(`SELECT * FROM reviews WHERE product_id in (${ids})`);
    res.json(reviews);
  });

  router.get('/:start/:end', async function(req, res, next) {
    const start = req.params.start;
    const end = req.params.end;
    const reviews = await dbGet(`SELECT * FROM reviews WHERE product_id BETWEEN ${start} AND ${end}`);

    res.json(reviews);
  });
}

init().then(() => {
  console.log('reviews init');
});

module.exports = router;
