// TODO: add comments
/**
 * 
 * @param {*} data 
 * @param {*} flag 
 * @param  {...any} keys 
 * @returns 
 */
const filterData = (data, flag, ...keys) => {
  let result = {};

  if (flag === '-a') {
    keys.forEach((key) => {
      if (key in data && flag === '-a') result[key] = data[key];
    });
  } else if (flag === '-d') {
    keys.forEach((key) => {
      delete data[key];
    });

    result = { ...data };
  }

  return result;
};

module.exports = filterData;
