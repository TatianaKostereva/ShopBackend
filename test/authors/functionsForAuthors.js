const BD = require('../test/_core/BD');
const allItems = require('../test/_core/_utils/getAllItems');
const allAuthors = allItems(authors);
const currentItem = require('../test/_core/_utils/findItemById');

function createAuthor(id, name, date) {
  const id = allAuthors[allAuthors.length - 1].id + 1;

  const newAuthor = {
    id,
    name,
    date,
  };

  BD.store.authors.push(newAuthor);
}
createAuthor(16, 'author 3', '12.06.1984');

function readAuthor(authorId) {
  return currentItem(authorId, allAuthors);
}
readAuthor(15);

function updateAuthor(authorId, name, date) {
  const author = currentItem(authorId, allAuthors);
  if (author.name !== name) author.name = name;
  if (author.date !== date) author.date = date;
}
updateAuthor(15, 'author 33', '12.06.1987');

function deleteAuthor(authorId) {
  const index = allAuthors.findIndex((item) => item.id === authorId);
  allAuthors.splice(index, 1);
  return true;
}
deleteAuthor(17);











