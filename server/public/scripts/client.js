$(document).ready(function(){

  console.log("words");
  getBios();
  console.log("after bios function call");
  function getBios() {
    $.ajax({
      type: 'GET',
      url: '/bios',
      success: function(dataFromBackEnd){
        appendBio(dataFromBackEnd);
      }
    });
  }

  function appendBio(bioData){
    $("#bioContainer").append('<div class="bio"></div>');
    for (var i = 0; i < bioData.length; i++) {
      var $el = $("#bioContainer").children().last();
      $el.append('<h3>' + bioData[i].memberName + '</h3>');
      $el.append('<p>Bio: ' + bioData[i].bio + '</p>');
      $el.append('<img src="' + bioData[i].image + '"/>');
    }

  }
});
