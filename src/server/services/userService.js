const mongodb = require('../config/mongo');

exports.getUserByUsername = async username => await mongodb.getDb().then(db => db
  .collection('users')
  .find({ username })
  .toArray());

exports.getUserByEmail = async email => await mongodb.getDb().then(db => db
  .collection('users')
  .find({ email })
  .toArray());

exports.queryUsers = async (query = '') => await mongodb.getDb().then(db => db
  .collection('users')
  .find()
  .toArray());

exports.createUser = async (username, email, password, rp = 0) => {
  const user = {
    username,
    email,
    password,
    rp,
  };

  return await mongodb.getDb().then(
    db => new Promise((resolve, reject) => {
      db.collection('users').insertOne(user, (err) => {
        if (err) reject(err);
        db.collection('users')
          .find({ username })
          .toArray()
          .then((user) => {
            resolve(user);
          });
      });
    }),
  );
};

exports.deleteUser = async (username, password) => await mongodb.getDb().then(
  db => new Promise((resolve, reject) => {
    db.collection('users').deleteOne({ username, password }, (err) => {
      if (err) reject(err);
      const user = getUserByUsername(username)[0];
      reslove(user);
    });
  }),
);
