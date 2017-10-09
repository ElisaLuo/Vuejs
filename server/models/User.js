// imports everything
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({ // creates user schema
  username: {type: String, required: true},
  password: {type: String, required: true}
})

// Sets up user schema
const User = mongoose.model('user', userSchema)

// exports schema
module.exports = User
