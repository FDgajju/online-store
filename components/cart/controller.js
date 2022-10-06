const AppError = require('../../utils/AppError');
const { add, read, empty, remove } = require('./service');
const productService = require('./../product/service');

const insertIntoCart = async (req, res, next) => {
  const { body, user } = req;

  const product = await productService.read(body.product);
  const productObject = {
    products: { product: body.product, price: product.data.price },
    user: user._id,
  };

  const cart = await add(user._id, productObject);

  res.status(200).send({
    status: 'success',
    // result: result.data.length,
    data: cart.data,
  });
};

const readCart = async (req, res, next) => {
  const { user } = req;
  const populateOptions = [{ path: 'my_products' }];

  const result = await read(String(user._id), populateOptions);

  if (!result.status) throw new AppError(result.error);

  res.status(200).send({
    status: 'success',
    data: result.data,
  });
};

const emptyCart = async (req, res, next) => {
  const { user } = req;

  const result = await empty(user._id);
  if (!result.status) throw new AppError(result.error);

  res.status(200).send({
    status: 'success',
    data: result.data,
  });
};

const removeProduct = async (req, res, next) => {
  const { user, body: filter } = req; 

  const result = await remove(user._id, filter);
  if (!result.status) throw new AppError(result.error);

  res.status(200).send({
    status: 'success',
    data: result.data,
  });
};

module.exports = { insertIntoCart, readCart, emptyCart, removeProduct };

