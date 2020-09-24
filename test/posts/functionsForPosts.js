const BD = require('../test/_core/BD');
const allItems = require('../test/_core/_utils/getAllItems');
const allComments = allItems(comments);
const allPosts = allItems(posts);
const currentItem = require('../test/_core/_utils/findItemById');

function createPost(text, authorId) {
  const id = allPosts[allPosts.length - 1].id + 1;

  if (!BD.store.authors.some((author) => author.id === authorId)) {
    throw Error('не найден автор');
  }

  const newPost = {
    id,
    text,
    author_id: authorId,
  };

  BD.store.posts.push(newPost);
}
createPost('text 3', 17);

function readPost(postId) {
  return currentItem(postId, allPosts);
}
readPost(1);

function findPostByComment(comment) {
  const postId = allComments.find((item) => item === comment).post_id;
  return allPosts.find((post) => post.id === postId);
}
const comment = allComments[5];
findPostByComment(comment);

function updatePost(postId, text) {
  const post = currentItem(postId, allPosts);
  post.text = text;
}
updatePost(1, 'new text');

function deletePost(postId) {
  const index = allPosts.findIndex((item) => item.id === postId);
  allPosts.splice(index, 1);
  return true;
}
deletePost(2);