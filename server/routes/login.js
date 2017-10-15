const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', function (req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      console.log(err)
    } else if (!user) {
      res.send({error: 'User does not exist'})
    } else {
      if (req.body.username === user.username && req.body.password === user.password) {
        res.send(user)
      } else {
        res.send({error: 'Incorrect password'})
      }
    }
  })
})

module.exports = router
