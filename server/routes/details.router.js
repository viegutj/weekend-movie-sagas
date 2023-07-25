const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get everything from both tables.
    let movieID = req.params.id
    console.log('GET for movie with id of: ', movieID);
    const queryText = 
    res.sendStatus(500)
});

module.exports = router;