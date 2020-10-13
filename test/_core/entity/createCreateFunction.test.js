const BD = require('../../_core/BD');
const createCreateFunction = require('./createCreateFunction');

describe('Простые тест кейсы', () => {
  test('Создать пост', () => {
    expect(createCreateFunction('posts')({authorId: 17, text: 'text 3'}))
      .toBe(BD.store.posts.find((item) => item.id === 3));
  });

  test('Добавить автора', () => {
    expect(createCreateFunction('authors')({name: 'author 3', date: '12.06.1984'}))
      .toBe(BD.store.authors.find((item) => item.name === 'author 3'));
  });

  test('Добавить комментарий', () => {
    expect(createCreateFunction('comments')({postId: 1, authorId: 17, text: 'text 3', rate: 50}))
      .toBe(BD.store.comments.find((item) => item.id === 8));
  });
});

describe('Плохие тест кейсы', () => {
  test('Создать пост, если передано невалидное id автора', () => {
    expect(() => createCreateFunction('posts')({authorId: 999, text: 'text 3'}))
      .toThrow('не найден автор');
  });

  test('Создать пост, если передан невалидный список', () => {
    expect(() => createCreateFunction('music')({authorId: 17, text: 'text 3'})).toThrow('список не найден');
  });
});
