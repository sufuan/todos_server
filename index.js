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
  // post ->  localhost:4000/addtodos
    app.post('/addtodos', async (req, res) => {
      
      const pd = req.body
      console.log(pd)
     
        const result = await todosCollection.insertOne(pd);
        res.send('h')
     

    })


    //   read  
    // localhost:4000/todos

    app.get('/todos',async (req, res) => {

      const todos = await todosCollection.find({}).toArray();
      res.send(todos)


      app.delete('/todos/:id', async (req, res) => {
        const id = req.params.id
        
        const q = { _id: (ObjectId(id)) }
        console.log(id);
        const result = await todosCollection.deleteOne(q)
        res.send(result)
      })


    })

   

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