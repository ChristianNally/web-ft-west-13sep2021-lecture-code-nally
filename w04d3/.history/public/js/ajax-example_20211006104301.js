$(document).ready(function(){

  $("form").on("submit", function(event){
    event.preventDefault();

    let url = 'https://api.apify.comm/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';

    $.ajax({
      url: url,
      method: "GET"
    })
    .then((result)=>{
      console.log('result:',result);
    })
    .catch((error)=>{
      console.log('error:',error);
    });

  });

});
