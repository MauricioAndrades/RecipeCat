var express = require('express');
var url = require('url');
var qs = require('qs');
var unirest = require('unirest');
var rp = require('request-promise');
var chalk = require('chalk')
var data = require('../devBin/foodapiexample.js')
var request = ('request');
require('dotenv').load();
var router = express.Router();

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
