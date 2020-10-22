const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
    // GET states for address form 
    let queryText = `SELECT * FROM "state"
                    ORDER BY "state_name";`;

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting states for address form', error);
        res.sendStatus(500);
    })
});

router.get('/info/:id', (req, res) => {
    // GET states for address form
    let queryText = `SELECT "state".id, "state".state_grade, "state".puc, "state".doc, "state".resident_count, 
                    "state".resident_mwh, "state".gov_email, 
                    json_agg(json_build_object('policy_name', "policy_name".name, 'policy_data', "policy_info".policy_data, 'policy_id', "policy_name".id)) 
                    AS "AdminStateInfo"
                        FROM "state"
                    JOIN "policy_info" on "policy_info".state_id = "state".id
                    JOIN "policy_name" on "policy_info".policy_id = "policy_name".id
                    WHERE "state".id = $1
                    GROUP BY "state".id`;

    let stateId = req.params.id

    pool.query(queryText, [stateId]).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting states for admin view', error);
        res.sendStatus(500);
    })
});

router.get('/sseo/:id', (req, res) => {
    // GET states for address form
    let queryText = `SELECT * FROM "state_office"
    WHERE state_id = $1;`;

    let stateId = req.params.id

    pool.query(queryText, [stateId]).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting sseo info for admin view', error);
        res.sendStatus(500);
    })
});



//delete a state
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let stateToDelete = req.params.id
    let stateQueryText = `DELETE FROM "state"
                        WHERE "id" = $1;`
    pool.query(stateQueryText, [stateToDelete])
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('error deleting state', error)
        })
});

//update a sseo
router.put('/updates/:id', rejectUnauthenticated, async (req, res) => {
    let sseoId = req.params.id
    const client = await pool.connect();
    const sseoObject = req.body
    //need to delete the value pair of id so
    //we just have the policy id and the policy data
    //in the object
    delete sseoObject["id"]
    console.log(sseoId)
    try {
        await client.query('BEGIN')

        const queryText = `UPDATE "state_office"
                        SET "SSEO_name" = $1,
                        "SSEO_email" = $2
                        WHERE "id" =$3`

        await client.query(queryText, [sseoObject.office, sseoObject.email, sseoId])

        await client.query('COMMIT');
        res.sendStatus(201)
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error)
        res.sendStatus(500)
    }
})

//add a new sseo
router.post('/', rejectUnauthenticated, (req, res) => {
    let contactInfo = req.body
    const sseoQuery = `INSERT INTO "state_office" ("state_id", "SSEO_name", "SSEO_email")
    VALUES ($1, $2, $3)`

    pool.query(sseoQuery, [contactInfo.id, contactInfo.office, contactInfo.email])
        .then((result) => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log('error adding new sseo', error)
            res.sendStatus(500)
        })
})

//delete a sseo
router.delete('/sseo/:id', rejectUnauthenticated, (req, res) => {
    let sseoToDelete = req.params.id
    let sseoQueryText = `DELETE FROM "state_office"
                        WHERE "id" = $1;`
    pool.query(sseoQueryText, [sseoToDelete])
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log('error deleting sseo', error)
        })
});

module.exports = router;


