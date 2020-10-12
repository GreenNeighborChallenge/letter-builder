const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:state_name', (req, res) => {
    let stateName = req.params.state_name
    console.log(stateName)
    const queryText = `SELECT "state".id FROM "state" WHERE "state".state_name = $1;`
    pool.query(queryText, [stateName])
        .then((result) => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch((error) => {
            console.log('Error in id query', error);
            res.sendStatus(500);
        })
})


router.put('/', (req, res) => {
    // PUT route code here
    let contactInfo = req.body
    console.log(contactInfo)
    
        const queryText = `UPDATE "state" 
                        SET "state_grade"=$1,
                         "puc"=$2, 
                         "doc"=$3, 
                         "resident_count"=$4, 
                         "resident_mwh"=$5, 
                         "gov_email"=$6
                        WHERE "id" = $7`

       pool.query(queryText, [contactInfo.state_grade, contactInfo.puc, contactInfo.doc, contactInfo.resident_count, contactInfo.resident_mwh, contactInfo.gov_email, contactInfo.stateId])
        .then(result => {
            res.sendStatus(201)
        }).catch (error =>  {
            console.log('error setting state info', error)
            res.sendStatus(500)
        })
});
//post new sseo
router.post('/', (req, res) => {
    let contactInfo=req.body
    const sseoQuery = `INSERT INTO "state_office" ("state_id", "SSEO_name", "SSEO_email")
    VALUES ($1, $2, $3)`

    for (i = 0; i < contactInfo.sseo.length; i++) {
        pool.query(sseoQuery, [contactInfo.stateId, contactInfo.sseo[i].name, contactInfo.sseo[i].email])
    }
})

router.post(`/state`, (req, res) => {
    const queryText = `INSERT INTO "state" ("state_name", "state_abv") 
                        VALUES ($1, $2)
                        RETURNING "id"`
    pool.query(queryText, [req.body.state_name, req.body.state_abv])
        .then((result) => {
            console.log(result.rows[0])
            res.send(result.rows[0])
        }).catch((error) => {
            console.log('error setting new state', error)
            res.sendStatus(500)
        })
})



router.post('/policy', async (req, res) => {
    const client = await pool.connect();
    const policyValuePairs = Object.entries(req.body)
    try {
        await client.query('BEGIN')

        const queryText = `SELECT "state".id from "state"
                        WHERE "state".state_name = $1`

        const result = await client.query(queryText, [policyValuePairs.state_name])

        const policyQuery = `INSERT INTO "policy_info" ("policy_id", "policy_data", "state_id")
        VALUES ($1, $2, $3)`

        for (let [key, value] of policyValuePairs) {
            await client.query(policyQuery, [key, value, result.rows[0]])
        }
        await client.query('COMMIT');
        res.sendStatus(201)
    } catch (error) {
        await client.query('ROLLBACK');
        res.sendStatus(500)
    }
})

//     pool.query(policyQuery, [key, value])
//     .then((result) => {
//         res.sendStatus(201)
//     }) .catch((error) =>{
//         console.log('error setting policy info', error);
//         res.sendStatus(500)
//     })
// }


module.exports = router;