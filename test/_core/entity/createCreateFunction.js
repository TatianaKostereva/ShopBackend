const BD = require('../../_core/BD');
const allItems = require('../_utils/getAllItems');
const allPosts = allItems('posts');

const checkPost = ({postId}) => {
  const checkingPost = allPosts.some((post) => post.id === postId);
  if (!checkingPost) {
    throw Error('пост не найден');
  }
}

const checkAuthor = ({authorId}) => {
  const checkingPost = BD.store.authors.some((post) => post.id === authorId);
  if (!checkingPost) {
    throw Error('не найден автор');
  }
}

const configs = {
  'posts': {
    checks: [
      checkAuthor,
    ],
    fieldsMap: {
      text: 'text',
      author_id: 'authorId',
    }
  },
  'authors': {
    checks: [],
    fieldsMap: {
      name: 'name',
      date: 'date',
    }
  },
  'comments': {
    checks: [
      checkAuthor,
      checkPost
    ],
    fieldsMap: {
      text: 'text',
      rate: 'rate',
      author_id: 'authorId',
      post_id: 'postId',
    }
  }
}

const createCreateFunction = (listName) => {
  const list = allItems(listName);
  const id = list[list.length - 1].id + 1;

  return (data) => {
    const config = configs[list];
    config.checks.forEach(item => item(data));

    const newRecord = {
      id: id,
    };
    Object.keys(config.fieldsMap).forEach(key => {
      const value = config.fieldsMap[key];
      newRecord[key] = data[value];
    })

    list.push(newRecord);
    return true;
  }
}

module.exports = createCreateFunction;