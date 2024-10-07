import { Request, Response } from "express"


export const speechToText = async (req: Request, res: Response){
    const data = req.body;
    const audioUrl= data?.audioUrl; //if data exists 
    const audioConfig = data?.config; 

    //422 means server cant process request but understands it 
    if(!audioUrl) return res.status(422).send("No audio URL provided");
    if(!audioUrl) return res.status(422).send("No audio config provided");
    
    try{
        const speechResults = await fetch("https://speech.googleapis.com/v1/speech:recognize", {
            method: "POST",
            body: JSON.stringify({
                audio: {
                    content: audioUrl
                },
                config: audioConfig,
            }),
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-goog-api-key": `${process.env.GOOGLE_SPEECH_TO_TEXT_API_KEY}`,
            },
        }).then((response)=>response.json());
        return res.send(speechResults)
    }catch(err){ 
        console.error("Error converting speech to text: ", err);
        res.status(404).send(err);
        return err;
    }

}