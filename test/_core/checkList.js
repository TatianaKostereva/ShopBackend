const BD = require('./BD');

const checkList = (func) => {
  return async (listName) => {
    const getStore = await BD();
    const checkingList = await getStore[listName];

    if (!checkingList) {
      throw new Error('список не найден');
    }
    return func(listName);
  }
}

module.exports = checkList;