var express = require('express');
var router = express.Router();

var bios = [
  {
    memberName: 'Jeff',
    bio: "Jeff is a guy. He can read just fine.",
    image: url("google.com")
  }
];

router.get('/', function(req, res) {
  console.log('get boios');
  res.send(bios);
});

module.exports = router;
