const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/demo';
const client = new MongoClient(uri);

const dbName = 'demo';
const collectionName = 'product';

const database = client.db(dbName);
const collection = database.collection(collectionName);


const searchQuery= async() => {

  const result = await collection.find().toArray();

  console.log(result);
}
searchQuery();