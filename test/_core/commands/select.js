const allItems = require('../_utils/getAllItems');

const select = () => {
  return {
    _tableName: null,
    _value: null,
    _field: null,
    table: function (tableName) {
      this._tableName = tableName;
      return this;
    },
    where: function (condition) {
      this._condition = condition;
      return this;
    },
    field: function (name) {
      this._field = name;
      return this;
    },
    run: async function () {
      this._table = await allItems(this._tableName);
      this._value = await this._table.find(this._condition);
      return this._value[this._field];
    }
  };
}

const field = select()
  .table('posts')
  .where(({author_id}) => author_id === 18)
  .field('text')
  .run()
  .then(console.log);