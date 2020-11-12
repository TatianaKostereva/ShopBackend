const BD = require('../BD');
const createReadFunction = require('./createReadFunction');

describe('Успешное прохождение', () => {
  test('Показать пост', async () => {
    const readPost = await createReadFunction('posts');
    const store = await BD();
    expect(await readPost(1)).toBe(store.posts.find((item) => item.id === 1));
  });

  test('Показать автора', async () => {
    const readAuthor = await createReadFunction('authors');
    const store = await BD();
    expect(await readAuthor(15)).toBe(store.authors.find((item) => item.id === 15));
  });

  test('Показать комментарий', async () => {
    const readComment = await createReadFunction('comments');
    const store = await BD();
    expect(await readComment(1)).toBe(store.comments.find((item) => item.id === 1));
  });
});

describe('Неуспешное прохождение',() => {
  test('Показать пост, если передано невалидное id', async () => {
    const readPost = await createReadFunction('posts');
    expect(await readPost(100)).toBeUndefined();
  });

  test('Показать автора, если передано невалидное id', async () => {
    const readAuthor = await createReadFunction('authors');
    expect(await readAuthor(19)).toBeUndefined();
  });

  test('Показать комментарий, если передано невалидное id', async () => {
    const readComment = await createReadFunction('comments');
    expect(await readComment(15)).toBeUndefined();
  });
});