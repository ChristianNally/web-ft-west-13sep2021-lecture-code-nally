$(document).ready(function(){

  $("form").on("submit", function(event){
//    event.preventDefault();

    alert('Hello World, Monkey Fuzz!');

    let url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';

    $.ajax({
      url: url,
      method: "GET"
    })
    .then((result)=>{
      console.log('result:',result);
    });

  });

});
