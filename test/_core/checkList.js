const BD = require('./BD');

const checkList = (func) => {

  return (listName) => {
    const checkingList = BD.store[listName];
    if (!checkingList) {
      throw Error('список не найден');
    }
    return func(listName);
  }
}



module.exports = checkList;