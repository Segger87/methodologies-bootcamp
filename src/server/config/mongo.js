MongoClient = require('mongodb').MongoClient

exports.mongodb = () => {
    MongoClient.connect('mongodb+srv://methodologies:password0@cluster0-zww5n.mongodb.net/test?retryWrites=true', (err, client) => {
        if (err) return console.log(err);
        return client.db('lgp');
    });
}