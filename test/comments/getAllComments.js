const BD = require('../test/BD');
const getAllComments = () => BD.store.comments;

module.exports = getAllComments;