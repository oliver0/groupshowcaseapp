var express = require('express');
var router = express.Router();

var biosObject = [
  {
    memberName: 'Jeff',
    bio: "Jeff is a guy. He can read just fine.",
    image: "http://www.wikihow.com/images/5/54/Play-High-Notes-on-the-Trumpet-Step-13.jpg",
    likes: 0
  },
  {
    memberName: 'Oliver',
    bio: "Oliver is a good guy. He makes sure you're looking if he's gonna toss something to you.",
    image: "http://www.wikihow.com/images/5/54/Play-High-Notes-on-the-Trumpet-Step-13.jpg",
    likes: 0
  },
  {
    memberName: 'Liz',
    bio: "Liz SK is a girl. She can't play the trumpet.",
    image: "http://www.wikihow.com/images/5/54/Play-High-Notes-on-the-Trumpet-Step-13.jpg",
    likes: 0
  }
];

router.get('/', function(req, res) {
  res.send(biosObject);
});

module.exports = router;
module.exports.biosExport = biosObject
