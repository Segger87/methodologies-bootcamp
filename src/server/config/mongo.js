module.exports = class Mongo {
    constructor() {
        this.MongoClient = require('mongodb').MongoClient
        this.db;
        this.connect();
    }

    connect() {
        this.MongoClient.connect('mongodb+srv://methodologies:password0@cluster0-zww5n.mongodb.net/test?retryWrites=true', (err, client) => {
            if (err) return console.log(err);
            this.db = client.db('lgp');
        });
    }
}