const createDeleteFunction = require('./createDeleteFunction');

describe('Простые тест кейсы', () => {
  test('Удалить пост', () => {
    expect(createDeleteFunction('posts')(2)).toBe(true);
  });

  test('Удалить автора', () => {
    expect(createDeleteFunction('authors')(17)).toBe(true);
  });

  test('Удалить комментарий', () => {
    expect(createDeleteFunction('comments')(2)).toBe(true);
  });
});