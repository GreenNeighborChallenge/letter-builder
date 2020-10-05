const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

/**
 * GET route template
 */
router.get('/:zip', (req, res) => {
    console.log('in zipRouter')
    console.log(req.params.zip)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.zip}&key=${process.env.zip_key}`)
    .then( response => {
        console.log(response.data); 
        res.send(response.data)
    }).catch(error => {
        res.sendStatus(500);
        console.log(error);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
