const userService = require('../services/userService');

exports.index = (req, res, next) => {
  try {
    userService.queryUsers().then((result) => {
      res.status(200).json({ users: result });
    });
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    res.status(200).json({ body: 'NOT IMPLEMENTED: User get' });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    userService.createUser(username, email, password).then((user) => {
      if (user.username == username) {
        res.status(201).json({ created: username });
      } else {
        res.status(401).json({ error: user });
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    res.status().json({ body: 'NOT IMPLEMENTED: User update' });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
