const findItemById = (itemId, list) => list.find((item) => item.id === itemId);

module.exports = findItemById;