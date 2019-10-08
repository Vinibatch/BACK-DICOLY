const mongoose = require('mongoose');

/* ----- Your DB ------ */
const dbUrl = 'mongodb://vini:T0lbiac1991@ds055865.mlab.com:55865/movies';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});

module.exports = {
  mongoose: mongoose,
}
