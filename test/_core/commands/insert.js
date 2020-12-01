const allItems = require('../_utils/getAllItems');
const configs = require('../../_core/configs');

const insert = () => {
  return {
    _tableName: null,
    _table: null,
    _params: null,
    table: function (tableName) {
      this._tableName = tableName;
      return this;
    },
    data: function (params) {
      this._params = params;
      return this;
    },
    run: async function () {
      this._table = await allItems(this._tableName);
      const config = configs.configs[this._tableName];
      const id = this._table[this._table.length - 1].id + 1;
      const newRecord = {
        id: id,
      };
      let value = '';

      config.fieldsMap.forEach(key => {
        value = key.replace(/[A-Z]/, function (letter) {
          return `_${letter.toLowerCase()}`
        });
        newRecord[value] = this._params[key];
      })

      this._table.push(newRecord);
      return this._table;
    }
  };
}

const table = insert()
  .table('posts')
  .data({authorId: 17, text: 'text 3'})
  .run()
  .then(console.log);

