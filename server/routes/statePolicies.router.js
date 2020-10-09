const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get(`/:stateName`, (req, res) => {
//uses state name to find state ID in DB
console.log('req.params in stateName', req.params)
  let stateName = req.params.stateName
  console.log(stateName)
  const queryText = `SELECT * FROM "state" WHERE "state".state_abv = $1;`
  pool.query(queryText, [stateName])
  .then((result) => {
    console.log(result.rows[0].id)
    //gets policies from DB based on id from first query
    const policyQuery = `SELECT "policy_info".state_id, "policy_info".policy_id, "policy_info".policy_data, "policy_name".name, "state".state_grade, "policy_name".id AS policy_name_id FROM "policy_info"
                        JOIN "policy_name" ON "policy_name".id = "policy_info".policy_id
                        JOIN "state" ON "state".id = "policy_info".state_id
                        WHERE "policy_info".state_id = $1;`
    pool.query(policyQuery, [result.rows[0].id])
    .then((result) => {
        res.send(result.rows);
    }).catch(err => {
        console.log('error in policyQuery', err);
        res.sendStatus(500);
      })

  }) .catch ((error) => {
    console.log('Error in id query', error);
    res.sendStatus(500);
  })
})

router.post('/sseo/:id', (req, res) => {
  let queryText = `INSERT INTO state_office ("state_id", "SSEO_name", "SSEO_email")
  VALUES ($1, $2, $3);`

  let stateId = req.params.id;
  let newName = req.body.newSSEOName;
  let newEmail = req.body.newSSEOEmail;

  pool.query(queryText, [stateId, newName, newEmail])
  .then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('error adding new sseo', error);
    res.sendStatus(500);
  });
});

module.exports = router;