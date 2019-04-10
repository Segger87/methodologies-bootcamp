const express = require('express');
const loginRequestModel = require('../shared/models/loginRequestModel');
const mongo = require('./mongo');

const mountRoutes = () => {
  const router = express.Router();
  var mongodb = new mongo();

  router.get('/hi', (req, res) => {
    res.send('api says hellooooo');
  });

  router.get('/createUser', (req, res) => {
    //var lr = new loginRequestModel(req.username, req.password);
    var lr = new loginRequestModel('testUser1', 'abc@123');
  });

  router.get('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return router;
};

module.exports = mountRoutes;
