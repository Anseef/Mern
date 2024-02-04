const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/demo'; //local URL

const dbName = 'demo'; //Database info
const collectionName = 'product';

const client = new MongoClient(uri);//DB connection
client.connect()
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const database = client.db(dbName);
const collection = database.collection(collectionName);

// insert function
const InsertQuery= async() => {

    const data ={
        name:'Shorts',
        price: 10,
        category: 'Clothing',
        description: 'Its a long lasting material',
        stock: 100
    }

    const result = await collection.insertOne(data);

    if(result.acknowledged){
        console.log("Insertion Successfull");
    }

}
InsertQuery();