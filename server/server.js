// npm run dev

const express = require('express')
const app = express()
const serverPort = 5000 // dependency in client/package.json proxy 

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(serverPort, () => {console.log(`server started on port ${serverPort}`)})