const createCRUD = require('../_core/entity/createCRUD');
const allItems = require('../_core/_utils/getAllItems');
const allComments = allItems('comments');

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

const crudComments = createCRUD('comments');

const readComment = crudComments.read(1);
const deleteComment = crudComments.delete(2);
const updateComment = crudComments.update({id: 1, text: 'new text', rate: 500});
const createComment = crudComments.create({postId: 1, authorId: 17, text: 'text 3', rate: 50});