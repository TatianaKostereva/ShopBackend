const createReadFunction = require('./createReadFunction');
const createDeleteFunction = require('./createDeleteFunction');
const createUpdateFunction = require('./createUpdateFunction');
const createCreateFunction = require('./createCreateFunction');

const createCRUD = (listName) => {
    return {
        create: createCreateFunction(listName),
        read: createReadFunction(listName),
        update: createUpdateFunction(listName),
        delete: createDeleteFunction(listName),
    }
}

module.exports = createCRUD;