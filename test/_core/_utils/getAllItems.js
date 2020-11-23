const BD = require('../BD');

const getAllItems = async (listName) => {
  const getStore = await BD();

  return await getStore[listName];
}

module.exports = getAllItems;