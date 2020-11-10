const allItems = require('../_utils/getAllItems');
const findIndexById = require('../_utils/findIndexById');
const checkList = require('../../_core/checkList');

const createDeleteFunction = async (listName) => {
  const list = await allItems(listName);
  return async (id) => {
    const index = findIndexById(id, list);
    if (index === -1) return false;
    list.splice(index, 1);
    return await list;
  }
}

const deleteFunction = async () => await createDeleteFunction('posts').then((res) => res(1)).then(console.log);

deleteFunction().then(() => {
  console.log('delete successfully');
});

module.exports = checkList(createDeleteFunction);