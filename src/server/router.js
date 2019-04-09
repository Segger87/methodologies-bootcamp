const express = require('express');

const mountRoutes = () => {
  const router = express.Router();

  router.get('/hi', (req, res) => {
    res.send('api says hellooooo');
  });

  router.get('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return router;
};

module.exports = mountRoutes;
