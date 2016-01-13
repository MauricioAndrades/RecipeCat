var express = require('express');
var unirest = require('unirest');
var url = require('url');
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
router.get('/', function(req, res, next) {

  /** searchParams @type {string} store the value of the search in a var */
  /*  "search=apples%2C%20bananas"*/
  var qString = qs.stringify(req.query);
  /** ApiEndpoint @type {string} Path to api */
  var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
  /** searchQ @type {string} link to food-api endpoint */
  var number = "&number=10"
  var searchQ = ApiEndpoint + qString + number;

  var ingredientsSearchOptions = {
    uri: searchQ,
    headers: {'X-Mashape-Key': ''},
    json: true
  };

  rp(ingredientsSearchOptions)
    .then(function(obj) {
      console.log(obj);
    })
    .catch(function(err) {
      console.log(err);
    });

});

module.exports = router;


  // These code snippets use an open-source library. http://unirest.io/nodejs
  // var unirestRequest = {

  // makeunicall: function(requestParam) {
  //   unirest.get(requestParam)
  //         .header("X-Mashape-Key", "cnwCrpf3T5mshcgcHAfnpt4RjWdPp1Ehy9BjsnJqNeVx1NM5hR")
  //         .header("Accept", "application/json")
  //         .end(function(result) {
  //           console.log(result.status, result.headers, result.body);
  //         });
  //     }
  //   };