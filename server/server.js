// npm run dev
// currently prints my api key in the server after entering localhost:5000/api
const data=require('./apiKey.json') 
const apiKey = data["apiKey"]


const express = require('express')
const app = express()
const serverPort = 5000 // dependency in client/package.json proxy 

app.get("/api", (req, res) => {
    res.send(apiKey)
})

app.listen(serverPort, () => {console.log(`server started on port ${serverPort}`)})
