const bcrypt = require('bcrypt');

const encrypt = async (rowData) => {
  return await bcrypt.hash(rowData, 12);
};
// TODO: rename this function , it's name should be verifyInfo
const compare = async (rowData, encryptData) => {
  return await bcrypt.compare(rowData, encryptData);
};

module.exports = { encrypt, compare };
