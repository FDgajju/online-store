const jwt = require('jsonwebtoken');

const genJwt = (id) => {
  const payload = { id: id };
  return jwt.sign(payload, process.env.JWT_SEC_KEY, {
    expiresIn: process.env.JWT_EXP_IN,
  });
};

const decToken = (token) => {
  return jwt.verify(token, process.env.JWT_SEC_KEY);
};

module.exports = { genJwt, decToken };
