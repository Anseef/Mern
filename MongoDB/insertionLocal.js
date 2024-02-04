app.get('/product', async (req, res) => {
    try {
  
      const database = client.db(dbName);
      
      const collection = database.collection(collectionName);
      const result = await collection.find({}).toArray();
      console.log('Fetched data:', result);
  
      res.json(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });