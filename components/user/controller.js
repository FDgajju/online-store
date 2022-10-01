const AppError = require('../../utils/AppError');
const { encrypt } = require('../../utils/bcrypt');
const { genJwt } = require('../../utils/jsonwebtoken');
const { add, readAll, read, modify, remove } = require('./service');

const insertUser = async (req, res, next) => {
  const { body: data } = req;

  data.password = await encrypt(data.password);

  const result = await add(data);
  if (!result.status) throw new AppError(result.error);

  const token = genJwt(result.data._id);

  res.status(201).send({
    status: 'success',
    token,
    data: result.data,
  });
};

const readAllUsers = async (req, res, next) => {
  const filter = {};
  const populateOptions = [
    { path: 'shops', select: ['name', 'type', 'isOpen', '-owner'] },
  ];

  const result = await readAll(filter, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    result: result.data.length,
    data: result.data,
  });
};

const readUser = async (req, res, next) => {
  const { _id } = req.user;
  const populateOptions = [{ path: 'shops' }];

  const result = await read(_id, populateOptions);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const modifyUser = async (req, res, next) => {
  const {
    body: data,
    user: { _id },
  } = req;

  const { password, role } = data;

  if (password || role)
    throw new AppError('this route is not for updating password', 400);

  const result = await modify(_id, data);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

const removeUser = async (req, res, next) => {
  const { _id } = req.user;

  const result = await remove(_id);
  if (!result.status) throw new AppError(result.error);

  res.status(201).send({
    status: 'success',
    data: result.data,
  });
};

module.exports = { insertUser, readAllUsers, readUser, modifyUser, removeUser };
