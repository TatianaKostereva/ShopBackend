const BD = require('../BD');
const createUpdateFunction = require('./createUpdateFunction');

describe('Простые тест кейсы', () => {
  test('Обновить информацию в посте', () => {
    expect(createUpdateFunction('posts')({id: 1, text: 'new text'}))
      .toBe(BD.store.posts.find((item) => item.id === 1).text === 'new text');
  });

  test('Обновить информацию об авторе', () => {
    expect(createUpdateFunction('authors')({id: 15, name: 'author 33', date: '12.06.1987'}))
      .toBe(BD.store.authors.find((item) => item.id === 15).name === 'author 33');
  });

  test('Обновить комментарий', () => {
    expect(createUpdateFunction('comments')({id: 1, text: 'new text', rate: 500}))
      .toBe(BD.store.comments.find((item) => item.id === 1).text === 'new text');
  });
});