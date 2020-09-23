const BD = require('../test/BD');
const allComments = require('../test/comments/getAllComments');
const allPosts = require('../test/posts/getAllPosts');

function addPost(text, authorId) {
  const id = allPosts[allPosts.length - 1].id + 1;

  if (!BD.store.author.some((author) => author.id === authorId)) {
    throw Error('не найден автор');
  }

  const newPost = {
    id,
    text,
    author_id: authorId,
  };

  BD.store.posts.push(newPost);
}
addPost('text 3', 17);

function findPostByComment(comment) {
  const postId = allComments.find((item) => item === comment).post_id;
  return allPosts.find((post) => post.id === postId);
}

const comment = allComments[5];
findPostByComment(comment);