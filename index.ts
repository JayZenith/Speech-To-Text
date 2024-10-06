import express from 'express';
import "dotenv/config";
const app = express();


app.get("/", (req,res)=>{
    res.send("Speech to text api running!")
})


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})