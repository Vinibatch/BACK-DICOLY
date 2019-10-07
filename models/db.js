const mongoose = require('mongoose');

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
}

mongoose.connect('mongo "mongodb+srv://cluster0-qeblq.mongodb.net/admin"  --username Vini',
    options,
    function(err) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("R.A.S");
      }
    }
);
