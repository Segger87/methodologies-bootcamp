const express = require('express');

const UsersController = require('./controllers/users');

const mountRoutes = () => {
  const router = express.Router();

  // Users
  router.get('/users', UsersController.index);
  router.get('/users/:id', UsersController.show);
  router.post('/users', UsersController.create);
  router.get('/create', UsersController.create);
  router.put('/users/:id', UsersController.update);
  router.delete('/users/:id', UsersController.destroy);

  // Fall-through
  router.get('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return router;
};

module.exports = mountRoutes;
