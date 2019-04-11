const mongodb = require('../config/mongo');

const getUserByUsername = async username => await mongodb.getDb().then(db => db
  .collection('users')
  .find({ username })
  .toArray());

const getUserByEmail = async email => await mongodb.getDb().then(db => mongodb.db
  .collection('users')
  .find({ email })
  .toArray());

const queryUsers = async (query = '') => await mongodb.getDb().then(db => db
  .collection('users')
  .find()
  .toArray());

const usernameExists = username => getUserByUsername(username).then(result => result !== []);

const emailExists = email => getUserByEmail(email).then((result) => {
  result !== [];
});

exports.createUser = async (username, email, password, rp = 0) => {
  if (usernameExists(username)) {
    throw new Error('username already exists');
  }

  if (emailExists(email)) {
    throw new Error('email already in use');
  }

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
        const user = getUserByUsername(username)[0];
        resolve(user);
      });
    }),
  );
};

exports.deleteUser = async (username, password) => {
  if (usernameExists(username)) {
    throw new Error('user not found exists');
  }
  return await mongodb.getDb().then(
    db => new Promise((resolve, reject) => {
      db.collection('users').deleteOne({ username, password }, (err) => {
        if (err) reject(err);
        const user = getUserByUsername(username)[0];
        reslove(user);
      });
    }),
  );
};
