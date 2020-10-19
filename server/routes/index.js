var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  console.log("request received");
  res.send("Hello World");
});

module.exports = router;
