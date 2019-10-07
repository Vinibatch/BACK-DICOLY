var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send(this.state.name);
    console.log (this.state.name)
});

module.exports = router;