const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
console.log('in get genres by id and id is:', req.params);

    //set querytext for query to DB
    const queryText = `
            SELECT "genres"."name" FROM "movies"
            JOIN "movies_genres"
                ON "movies"."id" = "movies_genres"."movie_id"
            JOIN "genres"
                ON "movies_genres"."genre_id" = "genres"."id"
            WHERE "movies"."id" = $1
        ;`;

    //pool to db and get array of genre objects
    pool.query(queryText, [req.params.id])
        .then(result=>{
            console.log('result.rows:', result.rows);
            //send results
            res.send(result.rows);
        })
        .catch(err=>{
            console.error('in get genre err', err);
            res.sendStatus(500);
        })

});

module.exports = router;