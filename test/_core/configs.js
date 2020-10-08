const BD = require('./BD');
const POSTS = require('./constants').POSTS;
const allItems = require('./_utils/getAllItems');
const allPosts = allItems(POSTS);

const checkPost = ({postId}) => {
  const checkingPost = allPosts.some((post) => post.id === postId);
  if (!checkingPost) {
    throw Error('пост не найден');
  }
}

const checkAuthor = ({authorId}) => {
  const checkingAuthor = BD.store.authors.some((post) => post.id === authorId);
  if (!checkingAuthor) {
    throw Error('не найден автор');
  }
}

const configs = {
  'posts': {
    checks: [
      checkAuthor,
    ],
    fieldsMap: ['text', 'authorId']
  },
  'authors': {
    checks: [],
    fieldsMap: ['name', 'date']
  },
  'comments': {
    checks: [
      checkAuthor,
      checkPost
    ],
    fieldsMap: ['text', 'rate', 'authorId', 'postId']
  }
}

module.exports = configs;