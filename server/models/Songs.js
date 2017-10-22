// imports everything
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const songsSchema = new Schema({ // creates user schema
  title: {type: String},
  artist: {type: String},
  genre: {type: String},
  album: {type: String},
  albumImage: {type: String},
  youtubeId: {type: String},
  lyrics: {type: String},
  soundSource: {type: String}
})

// Sets up user schema
const Songs = mongoose.model('songs', songsSchema)

// exports schema
module.exports = Songs
