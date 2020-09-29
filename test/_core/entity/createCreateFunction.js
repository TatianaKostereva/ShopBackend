const BD = require('../../_core/BD');
const allItems = require('../_utils/getAllItems');
const allPosts = allItems('posts');

const createCreateFunction = (listName) => {
  const list = allItems(listName);
  const id = list[list.length - 1].id + 1;

  return ({postId, authorId, text, rate, name, date}) => {

    if (listName === 'posts' || listName === 'comments') {
      if (!BD.store.authors.some((author) => author.id === authorId)) {
        throw Error('не найден автор');
      }
    }

    if (listName === 'authors') {
      const newAuthor = {
        id,
        name,
        date,
      };

      list.push(newAuthor);
      return true;
    }

    if (listName === 'posts') {
      const newPost = {
        id,
        text,
        author_id: authorId,
      };

      list.push(newPost);
      return true;
    }

    if (listName === 'comments') {
      const checkingPost = allPosts.find((post) => post.id === postId);
      if (!checkingPost) {
        throw Error('пост не найден');
      }

      const newComment = {
        id,
        text,
        rate: rate,
        author_id: authorId,
        post_id: postId,
      };
      list.push(newComment);
      return true;
    }
  }
}

module.exports = createCreateFunction;