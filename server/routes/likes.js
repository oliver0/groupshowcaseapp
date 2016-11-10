var express = require('express');
var router = express.Router();
var biosPage = require('./bios');

var biosObject = biosPage.biosExport;



router.get('/', function(req, res) {

  console.log('get likess');
  console.log(biosObject);
  res.send(biosObject);
});
router.post('/', function(req, res) {
  console.log("likes page req.body " , req.body);
  console.log('adding a like ');
  var memberName = req.body.memberName;
  for (var i = 0; i < biosObject.length; i++) {
    if(memberName == biosObject[i].memberName){
      biosObject[i].likes++;
    }
  }
  console.log(biosObject);
  // console.log('req dot body', req.body);
  //likes.push(req.body);
  res.sendStatus(201);
});
module.exports = router;
