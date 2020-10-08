const configs = require('../../_core/configs');
const allItems = require('../_utils/getAllItems');
const findItemById = require('../_utils/findItemById');

const createUpdateFunction = (listName) => {
  const list = allItems(listName);

  return (data) => {
    const { id } = data;
    const config = configs[listName];
    const item = findItemById(id, list);

    config.fieldsMap.forEach(key => {
      const value = key.replace(/[A-Z]/, function(letter) {return `_${letter.toLowerCase()}`});
      if (data[value] === undefined) {
        data[value] = item[value];
      }
      item[value] = data[value];
    });

    return item;
  }
}

module.exports = createUpdateFunction;