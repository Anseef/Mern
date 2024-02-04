const { MongoClient } = require("mongodb")

const uri = 'mongodb://localhost:27071/';
const client = new MongoClient(uri)

const dbName = 'demo'
const collectionName = 'product'


const dbConnect = async() => {
    let result = await client.connect()
     .then(() => console.log('MongoDB connected successfully!'))
     .catch(err => console.error('Error connecting to MongoDB:', err));
     
    db = await result.db(dbName);
    return await db.collection(collectionName);
}

module.exports = dbConnect