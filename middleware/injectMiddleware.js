const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const injectMiddleware = (app) => {
  if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json());
};

module.exports = injectMiddleware;
