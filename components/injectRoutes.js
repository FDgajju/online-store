const AppError = require('../utils/AppError');
const errorHandler = require('../middleware/errorHandler');
const userRouter = require('./user/router');
const shopRouter = require('./shop/router');
const authRouter = require('./user/auth/router');
const productRouter = require('./product/router');
const cartRouter = require('./cart/router');
// it add the all the avaialbe routes.
const injectRoutes = (app) => {
  app.get('/', (req, res, next) => {
    res.status(200).send({ status: 'success', message: 'Working 👍️' });
  });

  // all application routes here ⤵️
  app.use('/online-store', authRouter);
  app.use('/user', userRouter);
  app.use('/shop', shopRouter);
  app.use('/product', productRouter);
  app.use('/cart', cartRouter);

  app.get('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
  });

  app.use(errorHandler);
};

module.exports = injectRoutes;
