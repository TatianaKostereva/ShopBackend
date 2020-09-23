const BD = require('../test/BD');
const allComments = require('../test/comments/getAllComments');
const allPosts = require('../test/posts/getAllPosts');

const addComment = (postId, authorId, text, rate) => {
  const id = allComments[allComments.length - 1].id + 1;

  if (!BD.store.author.some((author) => author.id === authorId)) {
    throw Error('не найден автор');
  }

  const newComment = {
    id,
    text,
    rate: rate,
    author_id: authorId,
    post_id: postId,
  };
  const checkingPost = allPosts.find((post) => post.id === postId);
  if (!checkingPost) {
    throw Error('не найден автор');
  };

  allComments.push(newComment);
};

addComment(1, 17, 'text 3', 50);

const findTopComment = () => {
  let topComment = allComments[0];
  for (let i = 1; i < allComments.length - 1; i++) {
    if (allComments[i].rate > topComment.rate) { // 10 1 4 5 3
      topComment = allComments[i];
    }
  }
  return topComment;
};

findTopComment();

function deleteComment(commentId) {
  const index = allComments.findIndex((item) => item.id === commentId);
  allComments.splice(index, 1);
  return true;
}

deleteComment(7);