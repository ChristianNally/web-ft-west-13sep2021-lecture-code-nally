$(document).ready(function(){

  $("form").on("submit", function(event){
    event.preventDefault();
    alert('i have taken over');
  });

});
