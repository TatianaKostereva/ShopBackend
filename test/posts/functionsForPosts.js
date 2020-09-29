const createCRUD = require('../_core/entity/createCRUD');
const allItems = require('../_core/_utils/getAllItems');
const allComments = allItems('comments');
const allPosts = allItems('posts');

function findPostByComment(comment) {
  const postId = allComments.find((item) => item === comment).post_id;
  return allPosts.find((post) => post.id === postId);
}
const comment = allComments[5];
findPostByComment(comment);

const crudPosts = createCRUD('posts');

const readPosts = crudPosts.read(1);
const deletePosts = crudPosts.delete(2);
const updatePosts = crudPosts.update({id: 1, text: 'new text'});
const createPosts = crudPosts.create({authorId: 17, text: 'text 3'});