const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:state', async (req, res) => {
    const selectedState = req.params.state;
    console.log('in get state', selectedState);

    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        const firstQuery = `
                        SELECT * FROM "state"
                        WHERE state = $1;`;

        const result = await client.query(firstQuery, [selectedState]);

        const stateId = result.rows[0].id;
        let offices = result.rows[0];
        console.log(offices);
        
        const secondQueryText = ` 
                          SELECT * FROM "state_office"
                          WHERE state_id = $1;
                          `
        const resultTwo = await client.query(secondQueryText, [stateId]);

        let SSEO = resultTwo.rows[0];

        const stateInfo = { ...offices, ...SSEO }
        console.log('this is the sseo info', SSEO, 'this is the total object', stateInfo);
        
        res.send(stateInfo)

    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error completing get state info', error),
            res.sendStatus(500)

    } finally {
        //ends pool.connect
        client.release();
    }
})



module.exports = router;