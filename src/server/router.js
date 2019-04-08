const express = require('express');

const mountRoutes = () => {
  const router = express.Router();

  router.get('/greeting', (req, res) => {
    res.send({ greeting: `Hello world!` });
  });

  router.get('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return router;
};

module.exports = mountRoutes;
