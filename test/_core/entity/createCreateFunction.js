const configs = require('../../_core/configs');
const functions = require('../../_core/validateErrors/functions');
const allItems = require('../_utils/getAllItems');
const checkList = require('../../_core/checkList');

const createCreateFunction = async (listName) => {
  const list = await allItems(listName);
  const config = configs.configs[listName];

  return async (data) => {
    await Promise.all(config.checks.map(functions.createCheck).map(async (func) => {
      await func(data);
    }));

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

const createFunction = async () => await createCreateFunction('posts').then((res) => res({authorId: 999, text: 'text 3'})).then(console.log);

createFunction().then(() => {
  console.log('create successfully');
});

module.exports = checkList(createCreateFunction);