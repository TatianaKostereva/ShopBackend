const findItemById = (itemId, base) => base.find((item) => item.id === itemId);

module.exports = findItemById;