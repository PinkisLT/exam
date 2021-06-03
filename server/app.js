const mongoose = require('mongoose')

const mainRouter = require('./route/route')
const cors = require('cors')


const express = require('express')
const app = express()
require('dotenv').config({path: "../.env"})




app.listen(3001)
app.use(express.json());

mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => {
        console.log('Successfully connected')
    })
    .catch((e) => {
        console.log(e)
        console.log('Error, connection failed')
    })
