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
  Songs.findOne({title: req.body.title}, function (err, songs) {
    if (err) {
      res.send(err)
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
        tab: req.body.tab
      }).save(function (err, songs) {
        if (err) {
          res.send(err)
        }
        res.send(songs)
      })
    } else {
      res.send({error: 'Error in creating song'})
    }
  })
})

module.exports = router
