const User = require('../components/user/model');
const AppError = require('../utils/AppError');
const { decToken } = require('../utils/jsonwebtoken');

const protect = async (req, res, next) => {
  let token;

  let { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1];
  }

  if (!token)
    throw new AppError(
      "You're not logged in! please log in to get access 🙏",
      401
    );

  const decode = decToken(token);
  const currentUser = await User.findOne({ _id: decode.id }).populate({
    path: 'shops',
    select: '_id',
  });

  if (!currentUser) {
    throw new AppError('The user belong to this token is no longer exist', 401);
  }

  req.user = currentUser;
  next();
};

const restrictedTo = (...roles) => {
  return async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError('You do not have perform this acton', 403);
    }

    next();
  };
};

module.exports = { protect, restrictedTo };
