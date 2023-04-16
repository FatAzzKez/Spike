// npm run dev
// currently prints my api key in the server after entering localhost:5000/api

// some code to get my api key from another file. not commiting this code to repo lol
const data=require('./apiKey.json') 
const myApiKey = data["apiKey"]

// don't know...
const express = require('express')
const cors = require('cors');
const app = express()
const serverPort = 5000 // dependency in client/package.json proxy 
app.use(cors());

app.get("/api", async (req, res) => {
    let text = req.query.param
    console.log(text)
    const response = await run(text)
    console.log(response)
    res.send(response) 
})


//this code is all to do the request using openai api
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: myApiKey,
});
const openai = new OpenAIApi(configuration);

async function run(text) {
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: text}],
    });
    return completion.data.choices[0].message.content;
}

// don't know what this is..
app.listen(serverPort, () => {console.log(`server started on port ${serverPort}`)})