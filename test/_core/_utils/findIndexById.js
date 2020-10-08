const findIndexById = (itemId, list) => list.findIndex((item) => item.id === itemId);

module.exports = findIndexById;