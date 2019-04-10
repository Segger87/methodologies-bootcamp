const mongodb = require('../config/mongo');
const mogno = new mongodb();

exports.getUserByUsername = username => {
  return mogno.db.collection('users')
    .find({ 'username' : username })
    .toArray();
};

exports.getUserByEmail = email => {
  return mogno.db.collection('users')
    .find({ 'email' : email })
    .toArray()
};

exports.queryUsers = (query='') => {
  return mogno.db.collection('users')
  .find()
  .toArray();
};

exports.usernameExists = username => getUserByUsername(username).then(result => result != []);

exports.emailExists = email => getUserByEmail(email).then(result => {result != []});

exports.createUser = (username, email, password, rp = 0) => {
  if (usernameExists(username)) {
    return 'username already exists';
  }
  if (emailExists(email)) {
    return 'email already in use';
  }
  const user = {
    username, email, password, rp,
  };
  mogno.db.collection('users').insertOne(user, (err) => {
    if (err) return err;
    const user = getUserByUsername(username)[0];
    return user;
  });
};

exports.deleteUser = (username, password) => {
  if (usernameExists(username)) {
    return 'user not found exists';
  }
  mogno.db.collection('users').deleteOne({ username, password }, (err) => {
    if (err) return err;
    const user = getUserByUsername(username)[0];
    return user;
  });
};
