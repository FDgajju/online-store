const AppError = require('../../utils/AppError');
const { add, readAll, read, modify, remove } = require('./service');

const insertUser = async (req, res, next) => {
  const { body: data } = req;

  const result = await add(data);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const readAllUsers = async (req, res, next) => {
  const filter = {};
  const populateOptions = [];

  const result = await readAll(filter, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    result: result.data.length,
    data: result.data,
  });
};

const readUser = async (req, res, next) => {
  const { id } = req.params;
  const populateOptions = [];

  const result = await read(id, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const modifyUser = async (req, res, next) => {
  const {
    body: data,
    params: { id },
  } = req;

  const result = await modify(id, data);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const removeUser = async (req, res, next) => {
  const { id } = req.params;

  const result = await remove(id);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

module.exports = { insertUser, readAllUsers, readUser, modifyUser, removeUser };
