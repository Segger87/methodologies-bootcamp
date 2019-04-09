const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const mountRoutes = require('./router');

// qq change these connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

const createApp = async () => {
  // await dbConnect(db);

  const app = express();

  app.use('/static', express.static('public'));

  app.use(bodyParser.json());

  const router = mountRoutes();

  app.use('/api', router);

  return app;
};

module.exports = createApp;
