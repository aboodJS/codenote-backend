import express, { json } from "express"
import { client } from "./database.js"
const app = express()
app.use(json())

async function runStableAPIConnect() {
  try {
    await client.connect();
    const result = await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    return result;
  } catch(err) {
    console.log(err)
  }
  finally {
    await client.close();
  }
}

app.get("/", (req,res) => {
    runStableAPIConnect()
    res.send("done")
})

app.post("/submit", (req,res) => {
    console.log({name: req.body.userName ,code: req.body.snippet, id: crypto.randomUUID()})
    res.send("hello world")
    
})

app.listen(3000, () => {
    console.log("server running")
})