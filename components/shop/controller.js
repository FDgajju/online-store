const AppError = require('../../utils/AppError');
const { add, readAll, read, modify, remove } = require('./service');

const insertShop = async (req, res, next) => {
  const { body: data } = req;

  data.owner = req.user._id;
  const result = await add(data);

  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const readAllShops = async (req, res, next) => {
  const filter = {};
  const populateOptions = [{ path: 'owned_by', select: ['name', 'email'] }];

  const result = await readAll(filter, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    result: result.data.length,
    data: result.data,
  });
};

const readShop = async (req, res, next) => {
  const { id } = req.params;
  const populateOptions = [
    { path: 'owned_by', select: ['-role', 'name', 'email'] },
  ];

  const result = await read(id, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const modifyShop = async (req, res, next) => {
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

const removeShop = async (req, res, next) => {
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

module.exports = { insertShop, readAllShops, readShop, modifyShop, removeShop };
