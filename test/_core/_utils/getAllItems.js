const BD = require('../BD');

const getAllItems = (baseName) => BD.store[baseName];

module.exports = getAllItems;