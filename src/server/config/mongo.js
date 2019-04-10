MongoClient = require('mongodb').MongoClient;
module.exports =  class mongodb{
  constructor(){
    this.db;
    this.connect();
  }
  connect(){
    MongoClient.connect(
      'mongodb+srv://methodologies:password0@cluster0-zww5n.mongodb.net/test?retryWrites=true',
      async (err, client) => {
        if (err) return err;
        this.db = client.db('lgp');
      },
    );
  }
};
