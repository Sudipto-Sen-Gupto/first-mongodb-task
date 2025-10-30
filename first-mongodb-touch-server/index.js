const express=require('express');
const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("data has moved to client")
})

app.listen(port,()=>{
    console.log("Port moves to ",port);
})