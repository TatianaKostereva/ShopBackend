const checks = require('./checks');
const types = checks.types;

const configs = {
  'posts': {
    checks: [
      {
        type: types.DEPENDENCY,
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
        type: types.DEPENDENCY,
        entityName: 'authors',
        errorMessage: 'не найден автор',
        fieldName: 'authorId',
      },
      {
        type: types.DEPENDENCY,
        entityName: 'posts',
        errorMessage: 'не найден пост',
        fieldName: 'postId',
      },
      {
        type: types.REQUIRED,
        errorMessage: 'не введен текст',
        fieldName: 'text',
      },
    ],
    fieldsMap: ['text', 'rate', 'authorId', 'postId']
  }
}

module.exports = {
  configs,
};