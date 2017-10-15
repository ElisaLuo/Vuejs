// imports everything
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const register = require('../routes/register')
const login = require('../routes/login')

// sets up app
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// connects to database
mongoose.connect('mongodb://elisal:Pdnlxx021@ds115045.mlab.com:15045/cargo-measurement')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Connection to the database successful')
})

// register function
app.use('/register', register)
app.use('/login', login)

// app listens on port 8081
app.listen(8081, function () {
  console.log('server running on port 8081')
})
