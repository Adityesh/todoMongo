const express = require('express')
const helmet = require('helmet')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const routes = require('./controller/api')
const bodyParser = require('body-parser')



// app.use(helmet());
app.use(express.json())
app.use(bodyParser.urlencoded({extended : false}))




app.use('/api',routes);

app.use(express.static('client'))
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})