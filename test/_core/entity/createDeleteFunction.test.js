const BD = require('../BD');
const createDeleteFunction = require('./createDeleteFunction');

describe('Простые тест кейсы', () => {
  test('Удалить пост', () => {
    expect(createDeleteFunction('posts')(2)).toStrictEqual(BD.store.posts.filter((item) => item.id !== 2));
  });

  test('Удалить автора', () => {
    expect(createDeleteFunction('authors')(17)).toStrictEqual(BD.store.authors.filter((item) => item.id !== 17));
  });

  test('Удалить комментарий', () => {
    expect(createDeleteFunction('comments')(2)).toStrictEqual(BD.store.comments.filter((item) => item.id !== 2));
  });
});

describe('Неуспешное прохождение', () => {
  test('Удалить пост, если передано невалидное id', () => {
    expect(createDeleteFunction('posts')(100)).toBe(false);
  });

  test('Удалить автора, если передано невалидное id', () => {
    expect(createDeleteFunction('authors')(19)).toBe(false);
  });

  test('Удалить комментарий, если передано невалидное id', () => {
    expect(createDeleteFunction('comments')(15)).toBe(false);
  });
});