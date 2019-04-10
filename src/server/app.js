const express = require('express');
const bodyParser = require('body-parser');

const mountRoutes = require('./router');
const Mongo = require('./config/mongo');

const createApp = async () => {

  const app = express();

  app.use('/static', express.static('public'));

  app.use(bodyParser.json());

  const router = mountRoutes();

  app.use('/api', router);

  return app;
};

module.exports = createApp;
