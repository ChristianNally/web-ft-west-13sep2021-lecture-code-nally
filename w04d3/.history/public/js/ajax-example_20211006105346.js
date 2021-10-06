$(document).ready(function(){

  const showElements = (data) => {
//    console.log('data:',data);
    const $elementsForDisplay = $('<div class="canada-covid-data"></div>');
    const $regions = $(`<table class="regions"></table>`);

    $elementsForDisplay.append($regions);
  };

  $("form").on("submit", function(event){
    event.preventDefault();

    let url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';

    $.ajax({
      url: url,
      method: "GET"
    })
    .then((result)=>{
      console.log('result:',result);
      showElements(result.infectedByRegion);
    })
    .catch((error)=>{
      console.log('error:',error);
    });

  });

});
