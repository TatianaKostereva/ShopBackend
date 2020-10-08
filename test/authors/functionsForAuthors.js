const createCRUD = require('../_core/entity/createCRUD');
const AUTHORS = require('../_core/constants').AUTHORS;

const crudAuthors = createCRUD(AUTHORS);

module.exports = crudAuthors;