const configs = require('../../_core/configs');
const allItems = require('../_utils/getAllItems');

const createCreateFunction = (listName) => {
  configs.checks.forEach(item => item(listName));
  const list = allItems(listName);
  const id = list[list.length - 1].id + 1;

  return (data) => {
    const config = configs[listName];
    config.checks.forEach(item => item(data));

    const newRecord = {
      id: id,
    };
    let value = '';

    config.fieldsMap.forEach(key => {
      value = key.replace(/[A-Z]/, function(letter) {return `_${letter.toLowerCase()}`});
      newRecord[value] = data[key];
    })

    list.push(newRecord);
    return list.find((item) => item.id === id);
  }
}

module.exports = createCreateFunction;