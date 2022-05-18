const express = require('express');
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 4000
require('dotenv').config()


app.use(cors())
app.use(express.json())







const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://sufian:FsZqKFCovFjK5735@cluster0.874uo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





async function run() {
  try {
    await client.connect();
    console.log('db connec');

    const todosCollection = client.db("todos").collection("todoslist")


  //  create todos
    app.post('/addtodos', async (req, res) => {
      
      const pd = req.body
      console.log(pd)
     
        const result = await todosCollection.insertOne(pd);
        res.send('h')
     

    })


    //   read  

   

  } finally {
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send("hello")
})

app.get('/hero', (req, res) => {
  res.send("hello h")
})
app.get('/h', (req, res) => {
  res.send("hello h")
})






app.listen(port, () => {
  console.log('Listening')
})