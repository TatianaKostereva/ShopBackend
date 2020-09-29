const BD = require('../BD');

const getAllItems = (listName) => BD.store[listName];

module.exports = getAllItems;