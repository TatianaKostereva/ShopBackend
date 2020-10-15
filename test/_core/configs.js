const BD = require('./BD');

const createCheck = (listOfChecking) => {
  return (data) => {
    const id = data[listOfChecking.fieldName];
    const checking = BD.store[listOfChecking.entityName].some((item) => item.id === id);
    if (!checking) {
      throw Error(listOfChecking.errorMessage);
    }
  }
}

const configs = {
  'posts': {
    checks: [
      {
        entityName: 'authors',
        errorMessage: 'не найден автор',
        fieldName: 'authorId',
      },
    ],
    fieldsMap: ['authorId', 'text']
  },
  'authors': {
    checks: [],
    fieldsMap: ['name', 'date']
  },
  'comments': {
    checks: [
      {
        entityName: 'authors',
        errorMessage: 'не найден автор',
        fieldName: 'authorId',
      },
      {
        entityName: 'posts',
        errorMessage: 'не найден пост',
        fieldName: 'postId',
      },
    ],
    fieldsMap: ['text', 'rate', 'authorId', 'postId']
  }
}

module.exports = {
  configs,
  createCheck,
};