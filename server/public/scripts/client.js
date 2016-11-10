$(document).ready(function(){

  console.log("words");
  getBios();
  console.log("after bios function call");
  function getBios() {
    $.ajax({
      type: 'GET',
      url: '/bios',
      success: function(dataFromBackEnd){
        console.log(dataFromBackEnd);
        appendBios(dataFromBackEnd);
        $('.button-class').on('click', updateLikes);
        appendBios(dataFromBackEnd);
        //updateLikes();

      }
    });
  }
  function getLikes() {
    $.ajax({
      tupe:'GET',
      url: '/likes',
      success: function(likesData) {
        console.log("get likes works");
        updateLikes(likesData);



      }
    })
  }
    function appendBios(dataFromBackEnd) {
      $('#container').empty();
      for (var i = 0; i < dataFromBackEnd.length; i++) {
        console.log("test for loop");
        $('#container').append('<div id="bioData"><image src="' + dataFromBackEnd[i].image +
         '" width="300" height="200"><h2>' + dataFromBackEnd[i].memberName +
        '</h2><p>' + dataFromBackEnd[i].bio+ '</p></div>');
        $('#container').append('<button class="button-class" type="button" name="'+ dataFromBackEnd[i].memberName +
        '">'+ dataFromBackEnd[i].memberName +' Like</button>');
        $('#container').append('<p id="' + dataFromBackEnd[i].memberName + '">likes:' + dataFromBackEnd[i].likes + '</p>');
        $('#'+ dataFromBackEnd[i].memberName +' ').text('<p>likes:' + dataFromBackEnd[i].likes + '</p>');
      }
    }
    function updateLikes(dataFromBackEnd){
      var likesObject = {}
      likesObject.memberName = $(this).attr("name");
      // likesObject.counter = $(this).val();
      // likesObject.counter++ ;
      $(this).val(likesObject.memberName);
      $.ajax({
        type: 'POST',
        url: '/likes',
        data: likesObject,
        success: function(data) {
          console.log(likesObject);


        }
      });
    }


});
