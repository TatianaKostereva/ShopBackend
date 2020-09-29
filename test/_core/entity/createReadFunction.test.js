const BD = require('../BD');
const createReadFunction = require('./createReadFunction');

describe('Простые тест кейсы', () => {
  test('Показать пост', () => {
    expect(createReadFunction('posts')(1)).toBe(BD.store.posts.find((item) => item.id === 1));
  });

  test('Показать автора', () => {
    expect(createReadFunction('authors')(15)).toBe(BD.store.authors.find((item) => item.id === 15));
  });

  test('Показать комментарий', () => {
    expect(createReadFunction('comments')(1)).toBe(BD.store.comments.find((item) => item.id === 1));
  });
});