// imports everything
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const register = require('../routes/register')
const login = require('../routes/login')
const songs = require('../routes/songs')

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

// functions
app.use('/register', register)
app.use('/login', login)
app.use('/songs', songs)

// app listens on process.env.PORT
app.listen(8081, function () {
  console.log('server running on port ' + 8081)
})
