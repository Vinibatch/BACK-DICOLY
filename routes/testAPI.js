var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send(this.state.title);
    console.log (this.state.title)
});

module.exports = router;