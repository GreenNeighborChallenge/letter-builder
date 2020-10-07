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
    WHERE "policy_info".state_id = $1;`;

    let stateId = req.params.id

    pool.query(queryText, [stateId]).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting states for admin view', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;