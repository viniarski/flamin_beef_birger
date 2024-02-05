import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express()
const db = new Database('database.db')
const PORT = '8080'

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({message: 'CONNECTED'})
    res.status(200)
})

app.post('/booking', (req, res) => {
    try {
        console.log(req.body)

    } catch (err) {
        res.status(500).json({error: err})
    }
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`)
});