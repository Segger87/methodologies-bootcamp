MongoClient = require('mongodb').MongoClient;

exports.getDb = () => new Promise((resolve, reject) => {
  MongoClient.connect(
    'mongodb+srv://methodologies:password0@cluster0-zww5n.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true },
    async (err, client) => {
      if (err) reject(err);
      resolve(client.db('lgp'));
    },
  );
});
