(function() {
    $(document).ready(function() {
        recipeStart();
    });
})();
/**
  This function bootstraps the spotify request functionality.
*/

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

function recipeStart() {
    // var divPlaceholder = $('#q-results');
    $('#recipe-q-button').on('click', function ajaxRequest() {
        var params = {
            ingredients: $('#recipe-q').val()
        };
        $.get('/ingredients', params, function ajaxCallback(data) {
          console.log(data);
    
        });

    });
}

        $(document).ready(function() {
          $("#recipe-q-button").hover(function() {
          $('#recipe-q-button').animate({
            fontSize: '40px'
          },200)
          });
          $('#recipe-q-button').mouseleave(function(){
          $('#recipe-q-button').animate({fontSize : 28},150);
          });
          });
