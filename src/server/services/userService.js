const mongodb = require('../config/mongo');

exports.getUserByUsername = async username => await mongodb.getDb().then(db => db
  .collection('users')
  .find({ username })
  .toArray());

exports.getUserByEmail = async email => await mongodb.getDb().then(db => mongodb.db
  .collection('users')
  .find({ email })
  .toArray());

exports.queryUsers = async (query = '') => await mongodb.getDb().then(db => db
  .collection('users')
  .find()
  .toArray());

exports.usernameExists = username => getUserByUsername(username).then(result => result != []);

exports.emailExists = email => getUserByEmail(email).then((result) => {
  result != [];
});

exports.createUser = async (username, email, password, rp = 0) => {
  if (await usernameExists(username)) {
    return 'username already exists';
  }
  if (await emailExists(email)) {
    return 'email already in use';
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
  if (await usernameExists(username)) {
    return 'user not found exists';
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
