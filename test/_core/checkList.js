const BD = require('./BD');

const checkList = (func) => {

  return (listName) => {
    func(listName)
    const checkingList = BD.store[listName];
    if (!checkingList) {
      throw Error('список не найден');
    }
  }
}



module.exports = checkList;