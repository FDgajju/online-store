const AppError = require('../../../utils/AppError');
const { encrypt, compare } = require('../../../utils/bcrypt.js');
const filterData = require('../../../utils/filterData');
const { genJwt } = require('../../../utils/jsonwebtoken');
const { add, checkCredentials } = require('./../service');

const signUp = async (req, res, next) => {
  const { body } = req;
  const data = filterData(body, '-d', 'role'); // 2nd arg is required

  data.password = await encrypt(data.password);

  const result = await add(data);
  if (!result.status) throw new AppError(result.error, 400);

  const token = genJwt(result._id);

  res.status(201).send({
    status: 'success',
    token: token,
    data: result.data,
  });
};

const login = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  if (!email || !password)
    throw new AppError('please enter your email and password', 400);

  const user = await checkCredentials(email);

  if (!user.status) throw new AppError(user.error);
  if (!user.data)
    throw new AppError('Invalid credentials please try again.', 401);

  const isValidPassword = await compare(password, user.data.password);

  if (!isValidPassword)
    throw new AppError('Invalid credentials please try again.', 401);

  const token = genJwt(user.data._id);

  res.status(203).send({
    status: 'success',
    token: token,
    data: user,
  });
};

module.exports = { signUp, login };
