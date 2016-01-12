/**
 * main.js
 *     this file executes recipet start. it loads a potential
 *     ajax request on search query press from client side.
 */

(function() {
    $(document).ready(function() {
        recipeStart();
    });
})();

/**
 * FUNCTION BOOTSTRAPS THE RECIPE SEARCHBAR
 * creates an ajax request
 * @return {$.ajax({
 *     url: '/path/to/route',
 *     type: 'default GET (Other values: POST)',
 * })
 * .done(function() {
 *     console.log("success");
 * })
 * .fail(function() {
 *     console.log("error");
 * })
 * .always(function() {
 *     console.log("complete");
 * });
 */
function recipeStart() {

    /** event listener on search button click */
    $('#recipe-q-button').on('click', function ajaxRequest() {
        var params = {
            search: $('#recipe-q').val()
        };

        /** ajax request to server */
        $.get('/search', params, function(data) {
            console.log(data);
        });
    });
}
