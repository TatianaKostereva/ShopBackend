const BD = require('../test/_core/BD');
const currentItem = require('../test/_core/_utils/findItemById');
const createCRUD = require('../test/_core/entity/createCRUD');

function createComment(postId, authorId, text, rate) {
  const id = allComments[allComments.length - 1].id + 1;

  if (!BD.store.authors.some((author) => author.id === authorId)) {
    throw Error('не найден автор');
  }


  const checkingPost = allPosts.find((post) => post.id === postId);
  if (!checkingPost) {
    throw Error('пост не найден');
  };

  const newComment = {
    id,
    text,
    rate: rate,
    author_id: authorId,
    post_id: postId,
  };
  allComments.push(newComment);
}
createComment(1, 17, 'text 3', 50);

function findTopComment() {
  let topComment = allComments[0];
  for (let i = 1; i < allComments.length - 1; i++) {
    if (allComments[i].rate > topComment.rate) { // 10 1 4 5 3
      topComment = allComments[i];
    }
  }
  return topComment;
}
findTopComment();

function updateComment(commentId, text, rate) {
  const comment = currentItem(commentId, allComments);
  comment.text = text;
  if (comment.rate !== rate) comment.rate = rate;
}
updateComment(1, 'new text', 100);

const crudComments = createCRUD('comments');