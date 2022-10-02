const AppError = require('../../utils/AppError');
const { add, read } = require('./service');

const insertIntoCart = async (req, res, next) => {
  const { body, user } = req;

  const data = {
    products: body.product,
    user: user._id,
  };

  const result = await add({ user: user._id }, data);
  if (!result.status) {
    throw new AppError(result.error);
  }

  res.status(200).send({
    status: 'success',
    result: result.data.length,
    data: result.data,
  });
};

const readCart = async (req, res, next) => {
  const { user } = req;
  const populateOptions = [];

  const result = await read({ user: user._id }, populateOptions);
  res.status(200).send({
    status: 'success',
    data: result,
  });
};

module.exports = { insertIntoCart, readCart };
