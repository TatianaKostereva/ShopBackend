const BD = require('../BD');
const createUpdateFunction = require('./createUpdateFunction');

describe('Простые тесты', () => {
  test('Обновить информацию в посте', async () => {
    const updatePost = await createUpdateFunction('posts');
    const result = {id: 1, text: 'new text', author_id: 18};
    expect(await updatePost({id: 1, text: 'new text'}))
      .toEqual(result);
  });

  test('Обновить информацию об авторе', async () => {
    const updateAuthor = await createUpdateFunction('authors');
    const result = {id: 15, name: 'author 33', date: '12.06.1987'};
    expect(await updateAuthor({id: 15, name: 'author 33', date: '12.06.1987'}))
      .toEqual(result);
  });

  test('Обновить комментарий (передаем только те данные, которые нужно обновить)', async () => {
    const updateComment = await createUpdateFunction('comments');
    const result = {id: 1, text: 'new text', rate: 500, author_id: 15, post_id: 1}
    expect(await updateComment({id: 1, text: 'new text', rate: 500}))
      .toEqual(result);
  });

  test('Обновить комментарий (передаем невалидные данные)', async () => {
    const updateComment = await createUpdateFunction('comments');
    const result = {id: 1, text: 'new text', rate: 500, author_id: 15, post_id: 1}
    expect(await updateComment({id: 1, text: 'new text', rate: 500, note: 111}))
      .toEqual(result);
  });
});

