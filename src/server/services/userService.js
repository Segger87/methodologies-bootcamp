const mongodb = require('../config/mongo');

exports.getUserByUsername = async username => {
  return await mongodb.getDb().then((db)=>{
    return db.collection('users')
      .find({ 'username' : username })
      .toArray();
  })
};

exports.getUserByEmail = async email => {
  return await mongodb.getDb().then((db)=>{
    return mongodb.db.collection('users')
      .find({ 'email' : email })
      .toArray()
  });
};

exports.queryUsers = async (query='') => {
  return await mongodb.getDb().then((db)=>{
    return db.collection('users')
    .find()
    .toArray();
  });
};

exports.usernameExists = username => getUserByUsername(username).then(result => result != []);

exports.emailExists = email => getUserByEmail(email).then(result => {result != []});

exports.createUser = async (username, email, password, rp = 0) => {
  if (await usernameExists(username)) {
    return 'username already exists';
  }
  if (await emailExists(email)) {
    return 'email already in use';
  }
  const user = {
    username, email, password, rp,
  };

  return await mongodb.getDb().then((db)=>{
    return new Promise((resolve, reject) => {
      db.collection('users').insertOne(user, (err) => {
        if (err) reject(err);
        const user = getUserByUsername(username)[0];
        resolve(user);
      });
    });
  });

};

exports.deleteUser = async(username, password) => {
  if (await usernameExists(username)) {
    return 'user not found exists';
  }
  return await mongodb.getDb().then((db)=>{
    return new Promise((resolve, reject) => {
      db.collection('users').deleteOne({ username, password }, (err) => {
        if (err) reject(err);
        const user = getUserByUsername(username)[0];
        reslove(user);
      });
    });
  });
};
