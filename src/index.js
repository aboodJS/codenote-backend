import express, { json } from "express"
import { client } from "./database.js"
const app = express()
app.use(json())


async function sendData(data) {
    try {
        await client.connect()
        const result = await client.db("snippets").collection("code-snippets").insertOne(data)
        console.log(result)
    } catch (error) {
        console.log(error)
    }finally {
        await client.close()
    }

}



app.post("/submit", async(req,res) => {
    const body = {code: req.body.snippet, _id: crypto.randomUUID(),name: req.body.userName }
    await sendData(body)
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("server running")
})