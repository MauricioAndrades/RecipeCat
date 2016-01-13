var express = require('express');
var unirest = require('unirest');
var url = require('url');
var qs = require('qs');

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
/*  "search=apples%2C%20bananas"*/
  var qString = qs.stringify(req.query)
  /** ApiEndpoint @type {string} Path to api */
  var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?"
  /** searchQ @type {string} link to food-api endpoint */
  var searchQ = ApiEndpoint + qString;
  

});

module.exports = router;

/**
 * ENDPOINT DEFINITION:
 * GET https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients

These code snippets use an open-source library. http://unirest.io/nodejs

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5")
.header("X-Mashape-Key", "ClMETfyVRKmshaETqZ2T8qTE83S3p1MpL58jsnwbSArzqxdEMF")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
 
RES HEADER:
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
Allow-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
Allow-Control-Allow-Origin: *
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 346
Content-Type: application/json
Date: Sun, 11 Oct 2015 18:47:11 GMT
Server: Mashape/5.0.6
 */

/** JSON OBJECT RETURNED

[
  {
    "id": 641803,
    "title": "Easy & Delish! ~ Apple Crumble",
    "image": "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 4,
    "likes": 1
  },
  {
    "id": 645152,
    "title": "Grandma's Apple Crisp",
    "image": "https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 6,
    "likes": 1
  },
  {
    "id": 657563,
    "title": "Quick Apple Ginger Pie",
    "image": "https://spoonacular.com/recipeImages/Quick-Apple-Ginger-Pie-657563.jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 6,
    "likes": 1
  },
  {
    "id": 639487,
    "title": "Cinnamon Sugar Fried Apples",
    "image": "https://spoonacular.com/recipeImages/Cinnamon-Sugar-Fried-Apples-639487.jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 8,
    "likes": 46
  },
  {
    "id": 643426,
    "title": "Fresh Apple Cake With Caramel Sauce",
    "image": "https://spoonacular.com/recipeImages/Fresh-Apple-Cake-With-Caramel-Sauce-643426.jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 12,
    "likes": 9
  }
] 

*/

/*

$dir(qObj):

    auth: null
    hash: null
    host: null
    hostname: null
    href: "/?search=hello"
    path: "/?search=hello"
    pathname: "/"
    port: null
    protocol: null
    query: Object
    search: "?search=hello"
    slashes: null
    __proto__: Url

*/