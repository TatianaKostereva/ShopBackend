const configs = require('../../_core/configs');
const allItems = require('../_utils/getAllItems');
const findItemById = require('../_utils/findItemById');
const checkList = require('../../_core/checkList');

const createUpdateFunction = async (listName) => {
  const list = await allItems(listName);

  return (data) => {
    const { id } = data;
    const config = configs.configs[listName];
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

const updateFunction = async () => await createUpdateFunction('posts').then((res) => res({id: 1, text: 'new text'})).then(console.log);

updateFunction().then(() => {
  console.log('update successfully');
});

module.exports = checkList(createUpdateFunction);