const BD = require('./BD');

const checkList = async (func) => {

  return async (listName) => {
    const getStore = await BD();
    const checkingList = await getStore[listName];

    if (!checkingList) {
      throw Error('список не найден');
    }
    return func(listName);
  }
}

module.exports = checkList;