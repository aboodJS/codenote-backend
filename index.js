const express = require("express")

const app = express()
app.use(express.json())


app.post("/submit", (req,res) => {
    console.log({code: req.body.snippet, id: crypto.randomUUID().slice(0,13)})
    res.send("hello world")
    
})

app.listen(3000, () => {
    console.log("server running")
})