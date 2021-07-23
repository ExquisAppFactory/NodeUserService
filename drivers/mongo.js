const mongo = require('mongodb').MongoClient;
const connectString = 'mongodb://localhost:52061/userdb'

/**
 * Connection logic goes here: for MongoDB
 */

let userDB;
const connectMongo = async () => {
  userDB = await mongo.connect(connectionString, {useNewUrlParser: true});
  console.log('User Service - Connected to Mongo DB');
};

module.exports.getUserDB = () => userDB;
module.exports.connectMongo = connectMongo;
