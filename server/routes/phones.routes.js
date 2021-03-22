const express = require('express')
const router = express.Router()
const Phone = require('./../models/phone.model')

router.get('/phones', (req, res) => {
    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/details/:phone_id', (req, res) => {
  
    Phone
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

module.exports = router