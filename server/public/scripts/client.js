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
      }
    });
  }
});
