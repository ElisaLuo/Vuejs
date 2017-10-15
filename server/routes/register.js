const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, function (err, user) {
    if (err) {
      console.log(err)
    }
    if (!user) { // creates new user
      new User({
        username: req.body.username,
        password: req.body.password
      }).save(function (err, user) {
        if (err) {
          console.log(err)
        }
        res.send(user)
      })
    }
    if (user) {
      res.send({error: 'This user already exists'})
    }
  })
})

module.exports = router
