const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");
const cors = require('cors');
const objectId = require('mongodb').ObjectId;
require('dotenv').config();


//Middle were ------------------------------------------
app.use(cors());
app.use(express.json());

//Port---------------------------------------------------
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ne473.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // const database = client.db("express_food_delivery");
    // const foodCollection = database.collection("foods");
    // const purchesFoodCollection = database.collection("purchesFood");
console.log('database conected');
   


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




//test get -----------------------------------------------
app.get('/', (req, res) => {
  res.send('connected');
})
// listening port -----------------------------------------
app.listen(port, () => {
  console.log('listening port', port);
});