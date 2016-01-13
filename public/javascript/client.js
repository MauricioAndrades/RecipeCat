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
          console.log(data.toString());
        });
    });
}
