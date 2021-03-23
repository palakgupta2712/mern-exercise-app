const express = require('express')
const cors = require('cors')
//Import the mongoose module
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

//Set up default mongoose connection
const uri = 'mongodb://localhost:27017/myapp';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

//Get the default connection
const db_connection = mongoose.connection;

//Establish database connection
db_connection.once('open', () =>{
    console.log("MongoDB database connection established")
})

app.get('/', (req, res) => {
  res.send('Hello MERN!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})