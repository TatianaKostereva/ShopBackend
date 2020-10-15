const BD = require('./BD');

const types = {
    DEPENDENCY: 'DEPENDENCY',
    REQUIRED: 'REQUIRED',
}

const dependencyCheck = (checkConfig) => (data) => {
    const id = data[checkConfig.fieldName];
    const checking = BD.store[checkConfig.entityName].some((item) => item.id === id);
    if (!checking) {
        throw Error(checkConfig.errorMessage);
    }
}

const requiredCheck = (checkConfig) => (data) => {
    const value = data[checkConfig.fieldName];
    const checking =  value !== '' && value !== null && value !== undefined;
    if (!checking) {
        throw Error(checkConfig.errorMessage);
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
    types,
};