const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

/**
 * GET route template
 */
//queries geocode API with zip for state
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

//turns state abbrev into state long name, queries qeocode for state info
router.get('/state/:state', (req, res) => {
    console.log('in zipStateRouter')
    console.log(req.params.state)

    const stateList = { AZ: 'Arizona',
    AL: 'Alabama',
    AK: 'Alaska',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming', }

    const getStateFullName = function (stateAbbr) {
        return stateList[stateAbbr];
      }

      let searchState = getStateFullName(req.params.state)
      console.log(searchState)


    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchState}&key=${process.env.zip_key}`)
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
