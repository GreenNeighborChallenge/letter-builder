const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//user side
router.get('/', (req, res) => {

  const queryText = `SELECT "policy_language".short_info, "policy_language".long_info, "policy_language".petition_info, "policy_name".name, "policy_name".id FROM "policy_language"
                    JOIN "policy_name" ON "policy_name".id = "policy_language".policy_id
                    ORDER BY "policy_name".id;`

  pool.query(queryText)
  .then((result) => {
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

//add new policy
router.post('/', async (req, res) => {
  let newPolicy = req.body
  const client = await pool.connect();
  try{
    await client.query('BEGIN');

    const policyNameQuery=`INSERT INTO "policy_name" ("name") VALUES ($1) RETURNING "id"`

    let result = await client.query(policyNameQuery, [newPolicy.name])

    const queryText=`INSERT INTO "policy_language" ("policy_id", "short_info", "long_info", "petition_info")
    VALUES ($1, $2, $3, $4)`

    await client.query(queryText, [result.rows[0].id, newPolicy.short, newPolicy.long, newPolicy.petition])

    await client.query ('COMMIT');
    res.sendStatus(200)

  } catch (error) {
    await client.query('ROLLBACK');
    console.log('error adding new policy', error)
        res.sendStatus(500)
  }
});

//update a policy
router.put('/', async (req, res) => {
  let updates = req.body
  const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const nameQuery = `UPDATE "policy_name"
                          SET "name" = $1
                          WHERE "policy_name".id = $2`

        await client.query(nameQuery, [updates.policyName, updates.policyId])

        const languageQuery = `UPDATE "policy_language"
                              SET "short_info" = $1,
                              "long_info" = $2,
                              "petition_info" =$3
                              WHERE "policy_language".policy_id = $4`

            await client.query(languageQuery, [updates.short_info, updates.long_info, updates.petition_info, updates.policyId])
        await client.query ('COMMIT');
        res.sendStatus(200)

    } catch (error) {
        await client.query('ROLLBACK');
        console.log('error updating policy lanugage', error)
        res.sendStatus(500)
    }
})
  


//delete a policy
router.delete('/:id', (req, res) => {
  pool.query(`DELETE FROM "policy_name"
              WHERE "policy_name".id = $1`, [req.params.id])
  .then((result) => {
    res.sendStatus(200)
  }) .catch((error) => {
    console.log('error deleting policy', error)
    res.sendStatus(500)
  })
})


module.exports = router;