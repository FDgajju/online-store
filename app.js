const app = require('express')();
const injectMiddleware = require('./middleware/injectMiddleware');
const injectRoutes = require('./components/injectRoutes');

injectMiddleware(app);
injectRoutes(app);

module.exports = app;
