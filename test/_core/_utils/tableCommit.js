const BD = require('../BD');

const tableCommit = async (listName, listData) => {
  const getStore = await BD();

  getStore[listName] = listData;
}

module.exports = tableCommit;