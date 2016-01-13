var express = require('express');
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
  /** number of recipies you wantreturned */
  var number = "&number=6"
  /** searchQ: search query, full search string to make call with */
  var searchQ = ApiEndpoint + qString + number;

  var ingredientsSearchOptions = {
    uri: searchQ,
    headers: {'X-Mashape-Key': process.env.APIKEY},
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