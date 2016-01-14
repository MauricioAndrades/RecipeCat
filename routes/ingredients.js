var express = require('express');
// var url = require('url');
var qs = require('qs');
var unirest = require('unirest');
var rp = require('request-promise');


require('dotenv').load();
var router = express.Router();

/**
 * ROUTE THAT RECEIVES CLIENT SIDE AJAX REQUEST
 * @param {object} req req object made on clientside
 * @param {object} res response object sent back to client
 * @param {function} next) { console.log("req.query.search: " + req.query.search); res.end(); } [description]
 * @return {[type]} [description]
 *
 * req._parsedUrl.search: /?search=apples%2C+bananas
 * req.url: Object {search: "apples, bananas"}
 * req.query = Object {
    search: "apples, bannanas"
 }
*/

/**
searchParams @type {string} store the value of the search in a var
"ingredients=apples%2C%20bananas"
ApiEndpoint @type {string} Path to api
number of recipies you wantreturned
searchQ: search query, full search string to make call with
*/
router.get('/', function(req, res, next) {
    var qString = qs.stringify(req.query);
    var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
    var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    var number = "&number=10";
    var searchQ = ApiEndpoint + qString + number;

        var ingredientsSearchOptions = {
            uri: searchQ,
            headers: { 'X-Mashape-Key': process.env.APIKEY },
            json: true
        };
        debugger;
        rp(ingredientsSearchOptions).promise().bind(this)
            .then(function(array) { console.log(array);}
            //     array.map(function(array) {
            //         return {
            //             id: this.id,
            //             uri: ApiIdEndPoint + this.id + '/information',
            //             headers: { 'X-Mashape-Key': process.env.APIKEY },
            //             json: true
            //         };
            //     });
            // })
            // .all(recipeIdsArr)
            .catch(function(err) {
                console.log(err)
            }))
    res.end();
});

module.exports = router;

///////////////////////
//Get Recipe from ID //
///////////////////////


// GET https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information


// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/156992/information")
// .header("X-Mashape-Key", "ClMETfyVRKmshaETqZ2T8qTE83S3p1MpL58jsnwbSArzqxdEMF")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

  // artists = artists.items.map(function(artistObj) {
  //   return {
  //     name: artistObj.name,
  //     id: artistObj.id,
  //     url: artistObj.href
  //   }
  // });
