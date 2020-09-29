const createCRUD = require('../_core/entity/createCRUD');

const crudAuthors = createCRUD('authors');

const readAuthors = crudAuthors.read(15);
const deleteAuthors = crudAuthors.delete(17);
const updateAuthors = crudAuthors.update({id: 15, name: 'author 33', date: '12.06.1987'});
const createAuthors = crudAuthors.create({name: 'author 3', date: '12.06.1984'});