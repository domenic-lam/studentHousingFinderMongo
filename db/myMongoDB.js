const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://localhost:27017/";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  let 
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("studentHousingDB";
    console.log("Connected successfully to server");
    const listingsCollection = db.collection("Listings")

    //  MQL -> json
    const query = {}
    const listings = listingsCollection.find(query).toArray();

    console.log("listings", listings)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
