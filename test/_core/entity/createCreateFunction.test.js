const BD = require('../../_core/BD');
const createCreateFunction = require('./createCreateFunction');
const errors = require('../validateErrors/errors');

const checkRecord = (newRecord) => (storeRecord) => {
  return Object.keys(newRecord).every(key => {
    return newRecord[key] === storeRecord[key.replace(/[A-Z]/,
      function(letter) {
      return `_${letter.toLowerCase()}`;
    })]
  });
}

describe('Простые тест кейсы', () => {
  test('Создать пост', async () => {
    const createPost = await createCreateFunction('posts');
    const store = await BD();

    const newRecord = {authorId: 17, text: 'text 3'};
    await createPost(newRecord);

    expect(store.posts.some(checkRecord(newRecord))).toBeTruthy();
  });

  test('Добавить автора', async () => {
    const createAuthor = await createCreateFunction('authors');
    const store = await BD();

    const newRecord = {name: 'author 3', date: '12.06.1984'};
    await createAuthor(newRecord);

    expect(store.authors.some(checkRecord(newRecord))).toBeTruthy();
  });

  test('Добавить комментарий', async () => {
    const createComment = await createCreateFunction('comments');
    const store = await BD();

    const newRecord = {postId: 1, authorId: 17, text: 'text 3', rate: 50};
    await createComment(newRecord);

    expect(store.comments.some(checkRecord(newRecord))).toBeTruthy();
  });
});

describe('Плохие тест кейсы', () => {
  test('Создать пост, если передано невалидное id автора', async () => {
    const createPost = await createCreateFunction('posts');

    await expect(createPost({authorId: 999, text: 'text 3'}))
      .rejects.toThrow(errors.dependency);
  });

  test('Создать пост, если передано невалидное id автора', async () => {
    const createComment = await createCreateFunction('comments');

    await expect(createComment({postId: 1, authorId: 17, text: ''}))
      .rejects.toThrow('не введен текст');
  });

  test('Создать пост, если передан невалидный список', async () => {
    await expect(createCreateFunction('music'))
      .rejects.toThrow('список не найден');
  });
});
