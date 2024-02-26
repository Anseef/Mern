const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/'; //local URL

const dbName = 'demo';
const userCollection = 'users'

const client = new MongoClient(uri);//DB connection
client.connect()
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const database = client.db(dbName);
const userDetailsCollection = database.collection(userCollection);
module.exports = { userDetailsCollection }