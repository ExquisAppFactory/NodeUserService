const mongo = require('mongodb').MongoClient;
const connectionString = 'mongodb://localhost:27017/userdb'
const userCollection = 'user';

/**
 * Connection logic goes here: for MongoDB
 */


const connectMongo = async () => {
  userDB = await mongo.connect(connectionString, {useNewUrlParser: true});
  console.log('User Service - Connected to Mongo DB');
};

const createUser = (criteria) => userDB.db().collection(userCollection).insertOne(criteria);
const updateUser = (criteria, body) => userDB.db().collection(userCollection).updateOne(criteria, body);
const deleteUser = (criteria) => userDB.db().collection(userCollection).deleteOne(criteria);
const findUser = (criteria) => userDB.db().collection(userCollection).findOne(criteria);

module.exports.getUserDB = () => userDB;
module.exports.createUser = createUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.findUser = findUser
module.exports.connectMongo = connectMongo;
