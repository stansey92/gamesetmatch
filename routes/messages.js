'use strict'

const express = require('express')
const router = express.Router()
const knex = require('../knex')


//yes it says post, but its a get all messages from the logged in user
router.post('/', (req, res, next) => {
  return knex('messages')
    .where({sender_name: req.body.user_name})
    .orWhere({receiver_name: req.body.user_name})
    .then((results) => {
      res.send(results)
    })
    .catch((err) => {
      next(err)
    })
})

// post new item to database
router.post('/create', (req, res, next) => {
  return knex('messages')
    .insert({
      "sender_name": req.body.sender_name,
      "receiver_name": req.body.receiver_name,
      "message": req.body.message
    })
    .returning('*')
    .then((results) => {
      res.send(results)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
