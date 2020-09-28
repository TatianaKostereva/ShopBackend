const allItems = require('../_utils/getAllItems');
const findItemById = require('../_utils/findItemById');

const createReadFunction = (listName) => {
  const list = allItems(listName);

  return (id) => {
    return findItemById(id, list);
  }
}

module.exports = createReadFunction;
