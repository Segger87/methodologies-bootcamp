const express = require('express');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb+srv://methodologies:password0@cluster0-zww5n.mongodb.net/test?retryWrites=true', (err, client) => {
  if (err) return console.log(err)
  db = client.db('lgp') // whatever your database name is
  console.log('Connected to db');
})

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
