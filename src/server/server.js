const express = require('express');
const bodyParser = require('body-parser');

const mountRoutes = require('./router');

const createApp = async () => {
  // await dbConnect(db);

  const app = express();
  const router = mountRoutes();

  app.use('/static', express.static('public'));

  app.use(bodyParser.json());

  app.use('/api', router);

  return app;
};

module.exports = createApp;
