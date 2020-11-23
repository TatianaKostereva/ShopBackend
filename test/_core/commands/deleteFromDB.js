const allItems = require('../_utils/getAllItems');
const tableCommit = require('../_utils/tableCommit');

const deleteFromDB = () => {
  return {
    _tableName: null,
    _condition: null,
    table: function (tableName) {
      this._tableName = tableName;
      return this;
    },
    where: function (condition) {
      this._condition = condition;
      return this;
    },
    run: async function () {
      this.table = await allItems(this._tableName);
      this.table = this.table.filter(this.condition);

      return await tableCommit(this.table);
    }
  };
}

const secondRecord = deleteFromDB()
  .table('posts')
  .where(({id}) => id === 2);

const firstRecord = deleteFromDB()
  .table('posts')
  .where(({id}) => id === 1);

secondRecord.run();
firstRecord.run();

const deleteFromDBFunc = (tableName) => (condition) => async () => {
  let table = await allItems(tableName);
  table = table.filter(condition);

  return await tableCommit(this.table);
}

const firstRecordFuncRun = deleteFromDBFunc('posts')(({id}) => id === 2);

const secondRecordFuncRun = deleteFromDBFunc('posts')(({id}) => id === 1);

secondRecordFuncRun();
firstRecordFuncRun();

class deleteFromDBClass {
  constructor() {
    this._tableName = null;
    this._condition = null;
  }

  table(tableName) {
    this._tableName = tableName;

    return this;
  }

  where(condition) {
    this._condition = condition;

    return this
  }

  async run() {
    this.table = await allItems(this._tableName);
    this.table = this.table.filter(this.condition);

    return await tableCommit(this.table);
  }
}

const secondRecordClass = new deleteFromDBClass()
  .table('posts')
  .where(({id}) => id === 2);

const firstRecordClass = new deleteFromDBClass()
  .table('comments')
  .where(({id}) => id === 1);

secondRecordClass.run();
firstRecordClass.run();
