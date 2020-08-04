const getRouter = require('../utils/getRouter');
const getDB = require('../utils/getDB');
const promiseDecorator = require('../utils/promiseDecorator');

const router = getRouter();
const db = getDB();

/* GET currency listing. */
router.get('/', async function(req, res, next) {
  const dbAll = promiseDecorator(db.all.bind(db));
  const currency = await dbAll('SELECT * FROM currency');

  res.json(currency);
});

/* GET currency listing by id. */
async function init() {
  router.get('/:id', async function(req, res, next) {
    const dbGet = promiseDecorator(db.all.bind(db));
    const id = req.params.id;
    const currency = await dbGet(`SELECT * FROM currency WHERE id=${id}`);

    res.json(currency);
  });
}

init().then(() => {
  console.log('currency init');
});

/* GET currency listing from start to end */
async function choice() {
  router.get('/:start/:end', async function(req, res, next) {
    const dbGet = promiseDecorator(db.all.bind(db));
    const start = req.params.start;
    const end = req.params.end;
    const currency = await dbGet(`SELECT * FROM currency WHERE id BETWEEN ${start} AND ${end}`);

    res.json(currency);
  });
}

choice().then(() => {
  console.log('currency choice');
});

module.exports = router;