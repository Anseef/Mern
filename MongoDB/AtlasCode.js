//Final working



// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://anseef_:zxcvbnmz@democluster.wogsmhq.mongodb.net/Foods?retryWrites=true&w=majority';
// const dbName = 'Foods';
// const collectionName = 'food_details';

// async function main() {
//   try {
//     const client = await MongoClient.connect(uri);

//     const database = client.db(dbName);
//     const collection = database.collection(collectionName);

//     const result = await collection.find({}).toArray();
//     console.log('Fetched data:', result);

//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// main();


/*                            Insert using await function                        */

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://anseef_:zxcvbnmz@democluster.wogsmhq.mongodb.net/Foods?retryWrites=true&w=majority';
const dbName = 'Foods';
const collectionName = 'food_details';

async function main() {
  try {
    const client = await MongoClient.connect(uri);
    
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const sampleData = {
      name: 'Sample Product',
      email: 'ansif@1233.gmail.com'
    };

    const result = await collection.insertOne(sampleData);

    console.log('Inserted data:', result);

  } catch (err) {
    console.error('Error:', err);
  }
}

main();