const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//user side
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "policy_language";`
  pool.query(queryText)
  .then((result) => {
      console.log(result.rows)
      res.send(result.rows)
  }).catch((error) => {
    console.log(`Error on detail get query ${error}`);
    res.sendStatus(500);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id
  const queryText = `SELECT "policy_language".petition_info FROM "policy_language" WHERE id=$1;`
  pool.query(queryText, [id])
  .then((result) => {
    console.log(result.rows)
    res.send(result.rows)
  }) .catch ((error) => {
    console.log('Error getting petition info', error);
    res.sendStatus(500);
  })
})

//admin side

router.post('/', (req, res) => {
  let newPolicy = req.body
  const queryText=`INSERT INTO "policy_language" ("policy", "short_info", "long_info", "petition_info")
  VALUES ($1, $2, $3, $4)`
  pool.query(queryText, [newPolicy.name, newPolicy.short, newPolicy.long, newPolicy.petition])
});

module.exports = router;