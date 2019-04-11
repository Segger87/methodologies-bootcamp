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
    userService.queryUsers(req).then((res) => {
      res.status(200).json({ users: result });
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    userService.getUserByUsername(username).then((usersByUsername) => {
      if (usersByUsername.length < 1) {
        userService.getUserByEmail(email).then((usersByEmail) => {
          if (usersByEmail.length < 1) {
            userService.createUser(username, email, password).then((user) => {
              if (user.username == username) {
                res.status(201).json({ created: username });
              } else {
                res.status(401).json({ error: user });
              }
            });
          }
        });
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
    const { username, password } = req.body;
    userService.deleteUser(username, password).then((result) => {
      if (!result) {
        res.status(204).send();
      } else {
        // raise error
      }
    });
  } catch (error) {
    next(error);
  }
};
