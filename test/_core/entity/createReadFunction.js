const allItems = require('../_utils/getAllItems');
const findItemById = require('../_utils/findItemById');

const createReadFunction = async (listName) => {
  const list = await allItems(listName);

  return async (id) => {
    return await findItemById(id, list);
  }
}

const readFunction = async () => await createReadFunction('posts').then((res) => res(2)).then(console.log);

readFunction().then(() => {
  console.log('read successfully');
});

module.exports = createReadFunction;