const allItems = require('../_utils/getAllItems');
const findItemById = require('../_utils/findItemById');
const checkList = require('../../_core/checkList');

const createReadFunction = async (listName) => {
  const list = await allItems(listName);

  return (id) => {
    return findItemById(id, list);
  }
}

const readFunction = async () => await createReadFunction('posts').then((res) => res(2)).then(console.log);

readFunction().then(() => {
  console.log('read successfully');
});

module.exports = checkList(createReadFunction);