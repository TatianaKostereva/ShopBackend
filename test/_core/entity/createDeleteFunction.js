const allItems = require('../_utils/getAllItems');
const findIndexById = require('../_utils/findIndexById');

const createDeleteFunction = (listName) => {
  const list = allItems(listName);
  return (id) => {
    const index = findIndexById(id, list);
    if (index === -1) return false;
    list.splice(index, 1);
    return list;
  }
}

module.exports = createDeleteFunction;