const createCRUD = require('../_core/entity/createCRUD');
const allItems = require('../_core/_utils/getAllItems');
const COMMENTS = require('../_core/constants').COMMENTS;
const allComments = allItems(COMMENTS);

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

const crudComments = createCRUD(COMMENTS);

module.exports = {
  findTopComment,
  ...crudComments,
};