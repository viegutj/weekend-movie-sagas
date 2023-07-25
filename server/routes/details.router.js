const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get everything from both tables.
    let movieID = req.params.id
    console.log('GET for movie with id of: ', movieID);
    const queryText = 
    `
    SELECT
    movies.id,
    movies.title,
    movies.poster,
    movies.description,
    ARRAY_AGG(genres.name) AS genres
    FROM
    movies
    JOIN
    movies_genres ON movies.id = movies_genres.movie_id
    JOIN
    genres ON movies_genres.genre_id = genres.id
    WHERE
    movies.id = $1
    GROUP BY
    movies.id;
    `;
    pool.query(queryText, [movieID])
    .then(result => {
        console.log('result is: ', result.rows);
        let movie = result.rows[0];
        res.send(movie)
    })
    .catch(error => {
        console.log('error making query', error);
        res.sendStatus(500)
    })
});

module.exports = router;