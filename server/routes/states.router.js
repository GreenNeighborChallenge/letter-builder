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
    let queryText = `SELECT * FROM "policy_info"
    JOIN "state" ON "policy_info".state_id = "state".id
    JOIN "state_office" ON "state".id = "state_office".state_id
    WHERE "policy_info".state_id = $1;`;

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
    let policyQueryText = `DELETE FROM "policy_info"
    WHERE "state_id" = $1;`
    let officeQueryText = `DELETE FROM "state_office"
    WHERE "state_id" = $1;`
    let stateQueryText = `DELETE FROM "state"
    WHERE "id" = $1;`
    let stateToDelete = req.params.id

    pool.query(policyQueryText, [stateToDelete]).then(result => {
        pool.query(officeQueryText, [stateToDelete]).then(result => {
            pool.query(stateQueryText, [stateToDelete]).then(result => {
                res.sendStatus(200);
            }).catch(error => {
                console.log('error deleting state info from states', error);
                res.sendStatus(500);
            })
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting state info from state_office', error);
            res.sendStatus(500);
        })
        res.sendStatus(200);
    }).catch(error => {
        console.log('error deleting state info from policy_info', error);
        res.sendStatus(500);
    })
});

module.exports = router;