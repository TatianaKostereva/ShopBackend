const configs = require('../../_core/configs');
const checks = require('../../_core/checks');
const allItems = require('../_utils/getAllItems');
const checkList = require('../../_core/checkList');

const createCreateFunction = (listName) => {
  checkList(listName);
  const list = allItems(listName);
  const config = configs.configs[listName];
  const checksList = config.checks.map(checks.createCheck);

  return (data) => {
    checksList.forEach(check => check(data));

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