const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {


//     SELECT "genres"."name" FROM "movies"
// JOIN "movies_genres"
// 	ON "movies"."id" = "movies_genres"."movie_id"
// JOIN "genres"
// 	ON "movies_genres"."genre_id" = "genres"."id"
// WHERE "movies"."id" = 1
// 	;
    //  const qryText = `
    //  SELECT "movies"."id", "movies"."title", "genres"."name" FROM "movies"
    //  JOIN "movies_genres"
	//      ON "movies"."id" = "movies_genres"."movie_id"
    //  JOIN "genres"
	//      ON "movies_genres"."genre_id" = "genres"."id"
    //  WHERE "movies"."id" = 1;
    //  `;
    //  pool.query(qryText)
    //       .then(result => {
    //            console.log(result.rows)
    //       })

  res.sendStatus(500)
});

module.exports = router;