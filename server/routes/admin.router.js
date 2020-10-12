const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:state_name', (req, res) => {
    let stateName=req.params.state_name
    console.log(stateName)
    const queryText = `SELECT "state".id FROM "state" WHERE "state".state_name = $1;`
  pool.query(queryText, [stateName])
  .then((result) => {
    console.log(result.rows)
    res.send(result.rows)
  }) .catch ((error) => {
    console.log('Error in id query', error);
    res.sendStatus(500);
  })
})


router.post('/', async (req, res) => {
    // POST route code here
    let contactInfo = req.body
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const queryText = `INSERT INTO "state" ("state_abv", "state_name", "puc", "doc")
                            VALUES ($1, $2, $3, $4)
                            RETURNING id;`

        const result = await client.query(queryText, [contactInfo.state_abv, contactInfo.state_name, contactInfo.puc, contactInfo.doc])

        const sseoQuery = `INSERT INTO "state_office" ("state_id", "SSEO_name", "SSEO_email")
                        VALUES ($1, $2, $3)`

        for (i = 0; i < contactInfo.sseo.length; i++) {
            await client.query(sseoQuery, [result.rows[0].id, contactInfo.sseo[i].name, contactInfo.sseo[i].email])
        }
        await client.query ('COMMIT');
        res.sendStatus(201)

    } catch (error) {
        await client.query('ROLLBACK');
        res.sendStatus(500)
    }
});

router.post('/policy', (req,res) => {
    const {selectedState, grade, cap, rps, pace, cvp, gpm, hsr, cs, cca, ees, cub, resCount, resMwh} = req.body
    const queryText = `INSERT INTO "policy_info" ("state_id", "policy_grade", "climate_plan", "portfolio_standard", 
    "pace", "clean_vehicle", "green_pricing", "home_solar", "community_solar", "community_choice", 
    "energy_standard", "utility_board", "resident_count", "resident_mwh")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `
    pool.query(queryText, [selectedState, grade, cap, rps, pace, cvp, gpm, hsr, cs, cca, ees, cub, resCount, resMwh])
    .then((result) => {
        res.sendStatus(201)
    }) .catch((error) =>{
        console.log('error setting policy info', error);
        res.sendStatus(500)
    })
})

module.exports = router;