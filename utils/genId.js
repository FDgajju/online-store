const crypto = require('crypto');

const genId = () => {
  return crypto.randomUUID();
};

module.exports = genId;
