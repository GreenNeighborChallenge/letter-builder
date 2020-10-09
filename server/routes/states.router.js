const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET states for address form
    let queryText = `SELECT * FROM "state"`;

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting states for address form', error);
        res.sendStatus(500);
    })
});

router.get('/info/:id', (req, res) => {
    // GET states for address form
    let queryText = `SELECT "state".id, "state".state_grade, "state".puc, "state".doc, json_agg(json_build_object('policy_name', "policy_name".name, 'policy_data', "policy_info".policy_data)) AS "AdminStateInfo"
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

router.delete('/:id', (req, res) => {
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

module.exports = router;