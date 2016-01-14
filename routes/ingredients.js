var express = require('express');
// var url = require('url');
var qs = require('qs');
var unirest = require('unirest');
var rp = require('request-promise');
var chalk = require('chalk')
var data = require('../devBin/foodapiexample.js')
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
router.get('/', function(req, res, next) {

    /** searchParams @type {string} store the value of the search in a var */
    /*  "ingredients=apples%2C%20bananas"*/
    var qString = qs.stringify(req.query);
    /** ApiEndpoint @type {string} Path to api */
    var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
    var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"
    /** searchQ @type {string} link to food-api endpoint */
    /** number of recipies you wantreturned */
    var number = "&number=10";
    /** searchQ: search query, full search string to make call with */
    var searchQ = ApiEndpoint + qString + number;

    var ingredientsSearchOptions = {
        uri: searchQ,
        headers: {
            'X-Mashape-Key': process.env.APIKEY
        },
        json: true
    };

    /**
     * RETURN PROMISE:
     * makes a call to the api and returns an array of objects.
     * Keys:
     *  ingredientsArr.id,
     *  ingredientsArr.image,
     *  ingredientsArr.title,
     *  ingredientsArr.usedIngredientCount,
     *  ingredientsArr.missedIngredientCount,
     */
    rp(ingredientsSearchOptions)
        .then(function(ingredientsArr) {
            var recipeIdsArr = ingredientsArr.map(function(array) {
                return {
                    name: array.title,
                    id: array.id
                };
            }).then(function(recipeIdsArr) {
                var idSearchOptions = {
                    uri: ApidIdEndPoint + recipeIdsArr + '/information',
                    headers: {
                        'X-Mashape-Key': process.env.APIKEY
                    },
                    json: true
                };
            })

            // ingredientsArr.forEach(function(object) {
            //     var searchQRecipe = ApiIdEndPoint + object.id + '/information'


            //     unirest.get(searchQRecipe)
            //     .header("X-Mashape-Key", process.env.APIKEY)
            //     .end(function (result) {
            //       // console.log(chalk.blue(result.status), chalk.yellow(result.headers), chalk.red(result.body));
            //         console.log(result.body);
            //     });
            // })


        // for (var i = 0; i < ingredientsArr.length; i++) {console.log(ingredientsArr[i].id); };
        }).catch(function(err) {
            console.log(err);
        });
    // res.end(result.body);
    res.send(data);
});

module.exports = router;

///////////////////////
//Get Recipe from ID //
///////////////////////

/**
GET https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information


unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/156992/information")
.header("X-Mashape-Key", "ClMETfyVRKmshaETqZ2T8qTE83S3p1MpL58jsnwbSArzqxdEMF")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

  artists = artists.items.map(function(artistObj) {
    return {
      name: artistObj.name,
      id: artistObj.id,
      url: artistObj.href
    }
  });

*/