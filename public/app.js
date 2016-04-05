$(function(){
  // console.log('jquery loaded');

  $("button").on('click', function(){
    var gifTitle = $("#gif").val();

    var gifBaseURL = 'http://api.giphy.com/v1/gifs/search?q=';
    var apiKey = '&api_key=dc6zaTOxFJmzC';
    var gifURL = gifBaseURL + gifTitle + apiKey;

    $.ajax({
      url: gifURL,
      type: 'GET'
    }).done(function(response){
      // get array of responses
      var gifArray = response.data;
      console.log(gifArray);

      // loop through array and append images to div
      for(var it=0; it < gifArray.length; it++){
          var imageURL = gifArray[it].images.fixed_height.url;
          var imageElement = '<img class=\"img-fluid\" src=\"' + imageURL + '\"/>'
          $(".gifContainer").append(imageElement);
         }
    });
  });
})
