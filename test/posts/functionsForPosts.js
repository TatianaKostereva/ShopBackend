const createCRUD = require('../_core/entity/createCRUD');
const allItems = require('../_core/_utils/getAllItems');
const findItemById = require('../_core/_utils/findItemById');
const POSTS = require('../_core/constants').POSTS;
const COMMENTS = require('../_core/constants').COMMENTS;
const allComments = allItems(COMMENTS);
const allPosts = allItems(POSTS);

function findPostByComment(comment) {
  const postId = allComments.find((item) => item === comment).post_id;
  return findItemById(postId, allPosts);
}
const comment = allComments[5];
findPostByComment(comment);

const crudPosts = createCRUD(POSTS);