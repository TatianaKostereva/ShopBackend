const BD = require('./BD');

const checkPost = ({postId}) => {
  const checkingPost = BD.store.posts.some((post) => post.id === postId);
  if (!checkingPost) {
    throw Error('пост не найден');
  }
}

const checkAuthor = ({authorId}) => {
  const checkingAuthor = BD.store.authors.some((item) => item.id === authorId);
  if (!checkingAuthor) {
    throw Error('не найден автор');
  }
}

const checkList = (listName) => {
  const checkingList = BD.store[listName];
  if (!checkingList) {
    throw Error('список не найден');
  }
}

const checkFieldsMap = (listName, data) => {
  return configs[listName].fieldsMap.forEach(key => {
    const value = key.replace(/[A-Z]/, function (letter) {
      return `_${letter.toLowerCase()}`
    });
    for (let item in data) {
      if (item !== value) {
        throw Error('введены не все поля');
      }
    }
  })
}

const configs = {
  checks: [
    checkList,
    checkFieldsMap,
  ],
  'posts': {
    checks: [
      checkAuthor,
    ],
    fieldsMap: ['authorId', 'text']
  },
  'authors': {
    checks: [],
    fieldsMap: ['name', 'date']
  },
  'comments': {
    checks: [
      checkAuthor,
      checkPost,
    ],
    fieldsMap: ['text', 'rate', 'authorId', 'postId']
  }
}

module.exports = configs;