const BD = require('../BD');
const createDeleteFunction = require('./createDeleteFunction');

describe('Простые тест кейсы', () => {
  test('Удалить пост', async () => {
    const deletePost = await createDeleteFunction('posts');
    const store = await BD();
    expect(await deletePost(2)).toStrictEqual(store.posts.filter((item) => item.id !== 2));
  });

  test('Удалить автора', async () => {
    const deleteAuthor = await createDeleteFunction('authors');
    const store = await BD();
    expect(await deleteAuthor(17)).toStrictEqual(store.authors.filter((item) => item.id !== 17));
  });

  test('Удалить комментарий', async () => {
    const deleteComment = await createDeleteFunction('comments');
    const store = await BD();
    expect(await deleteComment(2)).toStrictEqual(store.comments.filter((item) => item.id !== 2));
  });
});

describe('Неуспешное прохождение', () => {
  test('Удалить пост, если передано невалидное id', async () => {
    const deletePost = await createDeleteFunction('posts');
    expect(await deletePost(100)).toBe(false);
  });

  test('Удалить автора, если передано невалидное id', async () => {
    const deleteAuthor = await createDeleteFunction('authors');
    expect(await deleteAuthor(19)).toBe(false);
  });

  test('Удалить комментарий, если передано невалидное id', async () => {
    const deleteComment = await createDeleteFunction('comments');
    expect(await deleteComment(15)).toBe(false);
  });

  test('Удалить пост, если передан невалидный список', async () => {
    await expect(createDeleteFunction('music'))
      .rejects.toThrow('список не найден');
  });
});