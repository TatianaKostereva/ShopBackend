const allItems = require('../_utils/getAllItems');
const findIndexById = require('../_utils/findIndexById');

const deleteFromDB = () => {
  return obj;
}

const obj = {
  table: null,
  findTable: async function (listName) {
    this.table = await allItems(listName);
    return this;
  },
  deleteRow: function (id) {
    const index = findIndexById(id, this.table);
    if (index === -1) throw new Error ('Запись с данным id отсутствует');
    this.table.splice(index, 1);
    return this;
  },
  run: function () {
    return this.table;
  }
}

const table = deleteFromDB()
  .findTable('posts')
  .then(res => res.deleteRow(1))
  .then(res => res.run())
  .then(console.log);
