const allItems = require('../_utils/getAllItems');
const findItemById = require('../_utils/findItemById');

const createUpdateFunction = (listName) => {
  const list = allItems(listName);

  return ({id, name, date, text, rate}) => {
    const item = findItemById(id, list);
    if (listName === 'authors') {
      item.name = name;
      item.date = date;
    }
    if (listName === 'posts' || listName === 'comments') {
      item.text = text;
    }
    if (listName === 'comments') {
      item.rate = rate;
    }
    return true;
  }
}

module.exports = createUpdateFunction;