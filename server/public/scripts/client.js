$(document).ready(function(){

  $('#container').on('click','.button-class', updateLikes);//likes button listener
    getBios();
    function getBios() {//request for the initial data
      $.ajax({
        type: 'GET',
        url: '/bios',
        success: function(dataFromBackEnd){
          appendBios(dataFromBackEnd);
        }
      });
    }
    function getLikes() {//appends updated data from object on /likes page if successful
      $.ajax({
        tupe:'GET',
        url: '/likes',
        success: function(likesData) {
          appendBios(likesData)
        }
      })
    }
      function appendBios(dataFromBackEnd) {//Empty then append all the data to the DOM
        $('#container').empty();
        for (var i = 0; i < dataFromBackEnd.length; i++) {
          console.log("test for loop");
          $('#container').append('<div id="bioData"><image src="' + dataFromBackEnd[i].image +
           '" width="300" height="200"><h2>' + dataFromBackEnd[i].memberName +
          '</h2><p>' + dataFromBackEnd[i].bio+ '</p></div>');
          $('#container').append('<button class="button-class" type="button" name="'+ dataFromBackEnd[i].memberName +
          '">'+ dataFromBackEnd[i].memberName +' Like</button>');
        //  $('#container').append('<p id="' + dataFromBackEnd[i].memberName + '">likes:' + dataFromBackEnd[i].likes + '</p>');
          $('#container').append('<div id="'+ dataFromBackEnd[i].memberName +'likes">likes:' + dataFromBackEnd[i].likes + '</div>');
        }
      }
      function updateLikes(dataFromBackEnd){//sends object whith info of which member's like button was clicked
        var likesObject = {}//obect that contins the name of person
        likesObject.memberName = $(this).attr("name");
        $(this).val(likesObject.memberName);
        $.ajax({
          type: 'POST',
          url: '/likes',
          data: likesObject,//sends obect to /likes page
          success: function(data) { //sucess runs getLikes()
            getLikes();
          }
        });
      }
  });
