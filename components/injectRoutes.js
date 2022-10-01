const AppError = require('../utils/AppError');
const errorHandler = require('../middleware/errorHandler');
const userRouter = require('./user/router');
const shopRouter = require('./shop/router');
const authRouter = require('./user/auth/router');

const injectRoutes = (app) => {
  app.get('/', (req, res, next) => {
    res.status(200).send({ status: 'success', message: 'Working 👍️' });
  });

  // all application routes here ⤵️
  app.use('/user', userRouter);
  app.use('/shop', shopRouter);
  app.use('/online-store', authRouter);

  app.get('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
  });

  app.use(errorHandler);
};

module.exports = injectRoutes;
