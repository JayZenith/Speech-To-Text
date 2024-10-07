import express, {Request, Response} from 'express';
import { speechToText } from './functions/speechToText';
import "dotenv/config";

const app = express();

//Middleware on express to handle request bodyh on post request 
app.use(express.json({
    limit: "50mb", //audio url strings are lengthy so allow server to handle ti 

}))



/*req and res running on the callback*/
app.post("/speech-to-text", (req: Request, res: Response)=>{
    speechToText(req, res);
})


app.get("/", (req,res)=>{
    res.send("Speech to text api running!")
})


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})