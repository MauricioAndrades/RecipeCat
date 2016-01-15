var express = require('express');
var url = require('url');
var qs = require('qs');
var unirest = require('unirest');
var rp = require('request-promise');
var request = ('request');
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


router.get('/', function(request, response) {
  var qString = qs.stringify(request.query);
  var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
  var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
  var number = "&number=10";
  var searchQ = ApiEndpoint + qString + number;

  var params = {
    uri: searchQ,
    headers: {
      'X-Mashape-Key': process.env.APIKEY
    },
    json: true
  };

  var promiseGet = function(url, uniparams) {
    return new Promise(function makeuni(resolve, reject) {
      request.get(url, headers, function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  };

  var uniprom = promiseGet(params.uri, params.headers);

  uniprom.then(function(searchResult) {
    console.log(searchResult);
    res.send(searchResult);
    res.end();
  });
});

module.exports = router;
