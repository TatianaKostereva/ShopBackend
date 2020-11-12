const createReadFunction = require('./createReadFunction');
const createDeleteFunction = require('./createDeleteFunction');
const createUpdateFunction = require('./createUpdateFunction');
const createCreateFunction = require('./createCreateFunction');

const createCRUD = async (listName) => {
    return {
        create: await createCreateFunction(listName),
        read: createReadFunction(listName),
        update: createUpdateFunction(listName),
        delete: await createDeleteFunction(listName),
    }
}

module.exports = createCRUD;