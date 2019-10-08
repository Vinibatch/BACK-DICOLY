var express = require('express');
var router = express.Router();
const movieModel = require('../models/movies');
const apiKey = 'b40059e08c65fd8978cc1ff68ad58104&';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( "Welcome to our backend");
  console.log ( hello);
});

router.get('/movies', function(req, res, next) {
  request(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr&page=1&sort_by=popularity.desc&include_adult=false&include_video=false`, function(error, response, body) {
    body = JSON.parse(body);
    res.json({result: true, movies: body.results});
  });
});

module.exports = router;
