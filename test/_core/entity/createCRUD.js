const createReadFunction = require('./createReadFunction');
const createDeleteFunction = require('./createDeleteFunction');

const createCRUD = (listName) => {
    return {
        read: createReadFunction(listName),
        delete: createDeleteFunction(listName),
    }
}

module.exports = createCRUD;