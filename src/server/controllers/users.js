const Users = require('../models/users');

exports.index = async (req, res, next) => {
  try {
    res.status(200).json({ body: 'NOT IMPLEMENTED: Users list' });
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    res.status(200).json({ body: 'NOT IMPLEMENTED: User get' })
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    res.status(201).json({ body: 'NOT IMPLEMENTED: User create' });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    res.status().json({ body: 'NOT IMPLEMENTED: User update' })
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    res.status(204).send()
  } catch (error) {
    next(error);
  }
};
