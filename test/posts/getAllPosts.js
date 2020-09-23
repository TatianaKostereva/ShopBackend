const BD = require('../test/BD');
const getAllPosts = () => BD.store.posts;

module.exports = getAllPosts;