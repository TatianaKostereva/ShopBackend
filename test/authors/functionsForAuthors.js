const BD = require('../test/_core/BD');
const createCRUD = require('../test/_core/entity/createCRUD');

function createAuthor({name, date}) {
  const id = allAuthors[allAuthors.length - 1].id + 1;

  const newAuthor = {
    id,
    name,
    date,
  };

  BD.store.authors.push(newAuthor);
}
createAuthor({name: 'author 3', date: '12.06.1984'});

function updateAuthor(authorId, name, date) {
  const author = readAuthor(authorId);
  author.name = name;
  author.date = date;
}
updateAuthor(15, 'author 33', '12.06.1987');

function deleteAuthor(authorId) {
  const index = allAuthors.findIndex((item) => item.id === authorId);
  allAuthors.splice(index, 1);
  return true;
}
deleteAuthor(17);

const crudComments = createCRUD('author');











