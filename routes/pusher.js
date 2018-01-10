const express = require('express')
const router = express.Router()
const { pushMessage } = require('../pusher/pusherClient')

router.post('/push', (req, res) => {
  const attributes = req.body
  pushMessage(attributes.message)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(error => {
      res.status(400).json({ error })    
    })
})

module.exports = router