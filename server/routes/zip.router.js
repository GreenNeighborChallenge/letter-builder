const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');


//queries geocode API with zip for state
router.get('/:zip', (req, res) => {
    console.log('in zipRouter')
    console.log(req.params.zip)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.zip}&key=${process.env.zip_key}`)
        .then(response => {
            console.log(response.data);
            if (response.data.results[0]) {

                let addressInfo = response.data.results[0].address_components

                function searchResult(arrToSearch, zipVar) {
                    for (var i = 0; i < arrToSearch.length; i++) {
                        if (arrToSearch[i].long_name === zipVar && arrToSearch[i].types.includes('postal_code')) {
                            return arrToSearch
                        }
                        else {
                            return res.sendStatus(500);
                        }
                    }
                }
                let stateInfo = searchResult(addressInfo, req.params.zip).filter((obj) => {

                    return obj.types.includes("administrative_area_level_1");
                })
                console.log(stateInfo)
                res.send(stateInfo)
                // res.send(response.data)
                //if no results sends 500 error
            } else {
                res.sendStatus(500);
            }
        }).catch(error => {
            res.sendStatus(500);
            console.log(error);
        })
});



module.exports = router;
