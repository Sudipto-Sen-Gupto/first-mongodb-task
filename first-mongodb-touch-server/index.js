const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express=require('express');
const app=express();
const port=3000;
const cors=require('cors')
app.use(cors());
app.use(express.json());
 
//xMZnDHUOlI706Ete
//simple-project-db
const uri = "mongodb+srv://simple-project-db:xMZnDHUOlI706Ete@cluster0.6pjurty.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

 

app.get('/',(req,res)=>{
    res.send("data has moved to client")
})

async  function run(){
    try{
            const userDB=client.db('usersdb');
            const userCollection=userDB.collection('usersCollection')
          await client.connect();
          
          app.get('/user',async(req,res)=>{
            const cursor=await userCollection.find();
            const allValues= await cursor.toArray();
            res.send(allValues);
          })

          app.post('/user',async(req,res)=>{
            const newUser=req.body;
            console.log(newUser);

            const result=await userCollection.insertOne(newUser);
            res.send(result);
          })
             
          app.delete('/user/:id',async(req,res)=>{
            const id=req.params.id;
            console.log("your id=",id);
            const query={_id: new ObjectId(id)};
            const result=await userCollection.deleteOne(query);
            res.send(result);
          })

            await client.db("admin").command({ ping: 1 });
             console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
        finally{
            
        } 
}

run().catch(console.dir)

app.listen(port,()=>{
    console.log("Port moves to ",port);
})