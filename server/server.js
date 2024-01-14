
const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');
const { saveTask, getTask, deleteTask, updateTask } = require('./controllers/task');
require("dotenv").config()

const app = express()


app.use(express.json())
const PORT = process.env.PORT
app.use(cors( { origin : "*"}));

app.get("/", getTask )
app.post("/save", saveTask)
app.delete("/delete", deleteTask)
app.put("/update", updateTask)







app.listen(PORT, async () => {
    try{
        await connection
        console.log("connected to db successfully")
    }
    catch(err){
        console.log(`This error: ${err} is coming while connecting to DB`)

    }
    console.log(`listening on port ${PORT}`)
})
