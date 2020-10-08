const BD = require('../BD');
const createUpdateFunction = require('./createUpdateFunction');

describe('Простые тесты', () => {
  test('Обновить информацию в посте', () => {
    const result = {id: 1, text: 'new text', author_id: 18};
    expect(createUpdateFunction('posts')({id: 1, text: 'new text'}))
      .toEqual(result);
  });

  test('Обновить информацию об авторе', () => {
    const result = {id: 15, name: 'author 33', date: '12.06.1987'};
    expect(createUpdateFunction('authors')({id: 15, name: 'author 33', date: '12.06.1987'}))
      .toEqual(result);
  });

  test('Обновить комментарий (передаем только те данные, которые нужно обновить)', () => {
    const result = {id: 1, text: 'new text', rate: 500, author_id: 15, post_id: 1}
    expect(createUpdateFunction('comments')({id: 1, text: 'new text', rate: 500}))
      .toEqual(result);
  });

  test('Обновить комментарий (передаем невалидные данные)', () => {
    const result = {id: 1, text: 'new text', rate: 500, author_id: 15, post_id: 1}
    expect(createUpdateFunction('comments')({id: 1, text: 'new text', rate: 500, note: 111}))
      .toEqual(result);
  });
});

