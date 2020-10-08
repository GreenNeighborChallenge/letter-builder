const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/:address', (req, res) => {
    let address = req.params.address;
    console.log(address);
    console.log(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&includeOffices=true&levels=administrativeArea1&roles=legislatorUpperBody&roles=headOfGovernment&roles=legislatorLowerBody&key=${process.env.API_KEY}`);
    axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&includeOffices=true&levels=administrativeArea1&roles=legislatorUpperBody&roles=headOfGovernment&roles=legislatorLowerBody&key=${process.env.API_KEY}`)

        .then(response => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch(error => {
            res.sendStatus(500)
        })
})


module.exports = router;