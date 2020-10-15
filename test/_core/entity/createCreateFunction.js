const configs = require('../../_core/configs');
const allItems = require('../_utils/getAllItems');
const checkList = require('../../_core/checkList');

const createCreateFunction = (listName) => {
  checkList(listName);
  const list = allItems(listName);

  return (data) => {
    const config = configs.configs[listName];
    config.checks.forEach(listOfChecking => configs.createCheck(listOfChecking)(data));

    const id = list[list.length - 1].id + 1;

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