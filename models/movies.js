const mongoose = require('mongoose');


// Here, we just need to define a movie schema
const movieSchema = mongoose.Schema({
    title: String,
    
  });

// And then, we need to create a model which will create a new 'movies' collection in mlab base on the movie schema
const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
