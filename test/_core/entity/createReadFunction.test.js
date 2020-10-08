const BD = require('../BD');
const createReadFunction = require('./createReadFunction');

describe('Успешное прохождение', () => {
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

describe('Неуспешное прохождение', () => {
  test('Показать пост, если передано невалидное id', () => {
    expect(createReadFunction('posts')(100)).toBeUndefined();
  });

  test('Показать автора, если передано невалидное id', () => {
    expect(createReadFunction('authors')(19)).toBeUndefined();
  });

  test('Показать комментарий, если передано невалидное id', () => {
    expect(createReadFunction('comments')(15)).toBeUndefined();
  });
});