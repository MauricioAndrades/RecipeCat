(function() {
    $(document).ready(function() {
        recipeStart();
    });
})();
/**
  This function bootstraps the spotify request functionality.
*/

function recipeStart() {
    // var divPlaceholder = $('#q-results');
    // .on( events [, selector ] [, data ], handler )
    $('#recipe-q-button').on('click', function() {

        /** get value of searchfield */
        var params = $('#recipe-q').val();
        $.ajax({
            async: true,
            method: "GET",
            url: "/ingredients",
            data: params,
        })
        .done(function( data ) {
            console.log( "Data Saved: " + data );
        })
        .fail(function( data) {
            console.log("data failed");
        });
    });
}