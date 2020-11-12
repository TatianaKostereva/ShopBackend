const BD = require('../../_core/BD');
const createCreateFunction = require('./createCreateFunction');
const errors = require('../validateErrors/errors');

describe('Простые тест кейсы', () => {
  test('Создать пост', async () => {
    const createPost = await createCreateFunction('posts');
    const store = await BD();

    expect(await createPost({authorId: 17, text: 'text 3'}))
      .toBe(store.posts.find((item) => item.id === 4));
  });

  test('Добавить автора', async () => {
    const createAuthor = await createCreateFunction('authors');
    const store = await BD();

    expect(await createAuthor({name: 'author 3', date: '12.06.1984'}))
      .toBe(store.authors.find((item) => item.name === 'author 3'));
  });

  test('Добавить комментарий', async () => {
    const createComment = await createCreateFunction('comments');
    const store = await BD();

    expect(await createComment({postId: 1, authorId: 17, text: 'text 3', rate: 50}))
      .toBe(store.comments.find((item) => item.id === 8));
  });
});

describe('Плохие тест кейсы', () => {
  test('Создать пост, если передано невалидное id автора', async () => {
    const createPost = await createCreateFunction('posts');

    expect(async () => await createPost({authorId: 999, text: 'text 3'}))
      .toThrow(errors.dependency);
  });

  test('Создать пост, если передано невалидное id автора', async () => {
    const createComment = await createCreateFunction('comments');

    expect(async () => await createComment({postId: 1, authorId: 17, text: ''}))
        .toThrow('не введен текст');
  });

  test('Создать пост, если передан невалидный список', async () => {
    const createOtherList = await createCreateFunction('music');
    expect(async () => await createOtherList({authorId: 17, text: 'text 3'})).toThrow('список не найден');
  });
});
