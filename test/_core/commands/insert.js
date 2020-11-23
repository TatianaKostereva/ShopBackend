const allItems = require('../_utils/getAllItems');
const configs = require('../../_core/configs');

const insert = () => {
  return obj;
}

const obj = {
  listName: null,
  table: null,
  findTable: async function (listName) {
    this.listName = listName;
    this.table = await allItems(listName);
    return this;
  },
  createRow: function (params) {
    const config = configs.configs[this.listName];
    const id = this.table[this.table.length - 1].id + 1;
    const newRecord = {
      id: id,
    };
    let value = '';

    config.fieldsMap.forEach(key => {
      value = key.replace(/[A-Z]/, function(letter) {return `_${letter.toLowerCase()}`});
      newRecord[value] = params[key];
    })

    this.table.push(newRecord);
    return this;
  },
  run: function () {
  return this.table;
  }
}

const table = insert()
  .findTable('posts')
  .then(res => res.createRow({authorId: 17, text: 'text 3'}))
  .then(res => res.run())
  .then(console.log);

