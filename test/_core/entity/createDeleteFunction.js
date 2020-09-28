const allItems = require('../_utils/getAllItems');

const createDeleteFunction = (listName) => {
  const list = allItems(listName);
  return (id) => {
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    return true;
  }
}

module.exports = createDeleteFunction;
