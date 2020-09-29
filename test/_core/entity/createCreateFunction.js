const BD = require('../../_core/BD');
const allItems = require('../_utils/getAllItems');
const allPosts = allItems('posts');

const createAuthor = (id, {name, date}) => {
  return {
    id,
    name,
    date,
  };
}

const checkPost = ({postId}) => {
  const checkingPost = allPosts.find((post) => post.id === postId);
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

const createPost = (id, {text, authorId}) => {
  checkAuthor(authorId);

  return {
    id,
    text,
    author_id: authorId,
  };
}

const createComment = (id, {text, rate, authorId, postId}) => {
  checkAuthor(authorId);
  checkPost(postId);

  return {
    id,
    text,
    rate: rate,
    author_id: authorId,
    post_id: postId,
  };
}

const config = {
  'posts': {
    checks: [
      checkAuthor,
    ],
    fieldsMap: {
      id: 'id',
      text: 'text',
      author_id: 'authorId',
    }
  },
  'authors': {
    checks: [],
    fieldsMap: {
      id: 'id',
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
      id: 'id',
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
    config[list].checks.forEach(item => item(data));

    const item = config[listName](id, data);
    list.push(item);
    return true;
  }
}
createCreateFunction('posts')({authorId: 17, text: 'text 3'})

module.exports = createCreateFunction;