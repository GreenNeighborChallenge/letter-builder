const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', async (req, res) => {
    // POST route code here
    let contactInfo = req.body
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const queryText = `INSERT INTO "state" ("state", "puc", "doc")
                            VALUES ($1, $2, $3)
                            RETURNING id;`

        const result = await client.query(queryText, [contactInfo.selectedState, contactInfo.puc, contactInfo.doc])

        const sseoQuery = `INSERT INTO "state_office" ("state_id", "SSEO_name", "SSEO_email")
                        VALUES ($1, $2, $3)`

        for (i = 0; i < contactInfo.sseo.length; i++) {
            await client.query(sseoQuery, [result.rows[0].id, contactInfo.sseo[i].name, contactInfo.sseo[i].email])
        }
        res.sendStatus(201);

    } catch (error) {
        await client.query('ROLLBACK');
        res.sendStatus(500)
    }
});

module.exports = router;