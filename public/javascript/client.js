(function() {
    $(document).ready(function() {
        spotiStart();
    });
})();
/**
  This function bootstraps the spotify request functionality.
*/

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

function spotiStart() {
    var divPlaceholder = $('#q-results');
    $('#recipe-q-button').on('click', function ajaxRequest() {
        var params = {
            search: $('#recipe-q').val()
        };
        $.get('/search', params, function(data) {
          $("#q-results").html(data)
        });
    });
}
