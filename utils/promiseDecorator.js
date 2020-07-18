const promiseDecorator = (func) => {
  return (arg) => {
    return new Promise((resolve, reject) => {
      func(arg, (err, ...result) => {
        if (err) {
          reject(err);
        }

        resolve(...result)
      })
    })
  }
};

module.exports = promiseDecorator;
