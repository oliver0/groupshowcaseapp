var express = require('express');
var router = express.Router();

var bios = [
  {
    memberName: 'Jeff',
    bio: "Jeff is a guy. He can read just fine.",
    image: "./assets/images/bananas.png"
  },

  {
    memberName: 'Liz',
    bio: "Liz is a Prime student. She's acted in many plays!.",
    image: "./assets/images/pear.png"
  },

  {
    memberName: 'Oliver',
    bio: "Oliver is a guy and a Prime student. His name starts with 'O', like orange...",
    image: "./assets/images/orange.png"
  }
];

router.get('/', function(req, res) {
  console.log('get boios');
  res.send(bios);
});

module.exports = router;
