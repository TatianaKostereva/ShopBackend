const createCreateFunction = require('./createCreateFunction');

describe('Простые тест кейсы', () => {
  test('Создать пост', () => {
    expect(createCreateFunction('posts')({authorId: 17, text: 'text 3'}))
      .toBe(true);
  });

  test('Добавить автора', () => {
    expect(createCreateFunction('authors')({name: 'author 3', date: '12.06.1984'}))
      .toBe(true);
  });

  test('Добавить комментарий', () => {
    expect(createCreateFunction('comments')({postId: 1, authorId: 17, text: 'text 3', rate: 50}))
      .toBe(true);
  });
});