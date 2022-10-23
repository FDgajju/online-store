const AppError = require('../../utils/AppError');
const { add, readAll, read, modify, remove } = require('./service');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const insertProduct = async (req, res, next) => {
  const { body: data, user } = req;

  data.owner = user._id;
  const result = await add(data);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const readAllProducts = async (req, res, next) => {
  const filter = {};
  const populateOptions = [{ path: 'shop', select: ['name'] }];

  const result = await readAll(filter, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    result: result.data.length,
    data: result.data,
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const readProduct = async (req, res, next) => {
  const { id } = req.params;
  const populateOptions = [{ path: 'shop', select: ['name'] }];

  const result = await read(id, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const modifyProduct = async (req, res, next) => {
  const {
    body: data,
    params: { id },
    user,
  } = req;

  const result = await modify({ _id: id, owner: user._id }, data);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const removeProduct = async (req, res, next) => {
  const {
    params: { id },
    user,
  } = req;

  const result = await remove({ _id: id, owner: user.id });
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

module.exports = {
  insertProduct,
  readAllProducts,
  readProduct,
  modifyProduct,
  removeProduct,
};
