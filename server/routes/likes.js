var express = require('express');
var router = express.Router();
var biosPage = require('./bios');

var biosObject = biosPage.biosExport;



router.get('/', function(req, res) {

  console.log('get likess');
  console.log(biosObject);
  res.send(biosObject);
});
router.post('/', function(req, res) { //from POST on client.js

  var memberName = req.body.memberName;
  for (var i = 0; i < biosObject.length; i++) {
    if(memberName == biosObject[i].memberName){
      biosObject[i].likes++; //this funciton finds the received object. check name and if matches original object, adds 1 to likes.
    }
  }
  res.sendStatus(201);
});
module.exports = router;
