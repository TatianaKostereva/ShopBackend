const BD = require('../BD');
const dependencyError = require('./errors').dependency;
const requiredError = require('./errors').requirement;
const types = require('./constants');

const dependencyCheck = async (checkConfig) => async (data) => {
  const getStore = await BD();
  const id = data[checkConfig.fieldName];
  const checking = getStore[checkConfig.entityName].some((item) => item.id === id);
  if (!checking) {
    throw new dependencyError(checkConfig.errorMessage);
  }
}

const requiredCheck = (checkConfig) => (data) => {
  const value = data[checkConfig.fieldName];
  const checking =  value !== '' && value !== null && value !== undefined;
  if (!checking) {
    throw new requiredError(checkConfig.errorMessage);
  }
}

const createCheck = (checkConfig) => {
  switch (checkConfig.type) {
    case types.DEPENDENCY: return dependencyCheck(checkConfig);
    case types.REQUIRED: return requiredCheck(checkConfig);
  }

  throw Error('не найден конфиг');
}

module.exports = {
  createCheck,
  dependencyCheck,
  requiredCheck,
};