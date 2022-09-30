require('dotenv').config();
const connectToDb = require('./config/db.js');
const app = require('./app');
const handleShutdown = require('./shutdown');
const PORT = process.env.PORT || 3000;

const server = (app, PORT) => {
  return app.listen(PORT, () => {
    console.log(`Express server running on ${PORT}`);
  });
};

connectToDb().then((info) => {
  console.log(`DB Connected...`);
  server(app, PORT);
});

handleShutdown(server);
