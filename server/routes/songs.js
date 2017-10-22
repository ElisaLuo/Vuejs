const express = require('express')
const router = express.Router()
const Songs = require('../models/Songs')

router.get('/', (req, res) => {
  Songs.find({}, function (err, songs) {
    if (err) {
      console.log(err)
    }
    res.send(songs)
  })
})

router.post('/', (req, res) => {
  Songs.findOne({title: ''}, function (err, songs) {
    if (err) {
      console.log(err)
    }
    if (!songs) { // creates new user
      new Songs({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        album: req.body.album,
        albumImage: req.body.albumImage,
        youtubeId: req.body.youtubeId,
        lyrics: req.body.lyrics,
        soundSource: req.body.soundSource
      }).save(function (err, songs) {
        if (err) {
          console.log(err)
        }
        res.send(songs)
      })
    }
    if (songs) {
      res.send({error: 'This song already exists'})
    }
  })
})

router.get('/:songId', (req, res) => {
  Songs.findOne({_id: req.params.songId}, function (err, song) {
    if (err) {
      console.log(err)
    }
    res.send(song)
  })
})

module.exports = router
