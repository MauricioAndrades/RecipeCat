var express = require('express');
// var url = require('url');
var qs = require('qs');
var unirest = require('unirest');
var rp = require('request-promise');
var chalk = require('chalk');
var Promise = require('promise');
var request = require('request');

require('dotenv').load();
var router = express.Router();




router.get('/', function(req, res, next) {
    debugger;
    var qString = qs.stringify(req.query);
    var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
    var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    var number = "&number=10";
    var searchQ = ApiEndpoint + qString + number;

    var promiseGet = new Promise(function (resolve, reject){
        request.get(url, headers, function (err, res) {
            if(err) reject(err);
            else resolve(res);
        });
    });

    var params = {
        uri: searchQ,
        headers: {
            'X-Mashape-Key': process.env.APIKEY,
            'User-Agent': 'Request-Promise',
            'Connection': 'Keep-Alive'
        },
        json: true
    };

    var promiseGetIng = promiseGet(params.uri, params.headers);
    promiseGetIng.then(function(response){
        console.log(JSON.parse(response))
    })
});

module.exports = router;

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
// rp(options)
// .then(function(arr) {u
//         var recipeIdsArr = arr.map(function(array) {
//             return {
//                 name: array.title,
//                 id: array.id
//             };
//         });
//         arr.forEach(function(object) {
//                 var searchQRecipe = ApiIdEndPoint + object.id + '/information';
//                 unirest.get(searchQRecipe)
//                     .header("X-Mashape-Key", process.env.APIKEY)
//                     .end(function(response) {
//                         console.log(response.body);
//                     });
//             });
//     }).finally(res.send(response)).catch(function(err) {console.log(err);});
//
//     /**
 // * ROUTE THAT RECEIVES CLIENT SIDE AJAX REQUEST
 // * @param {object} req req object made on clientside
 // * @param {object} res response object sent back to client
 // * @param {function} next) { console.log("req.query.search: " + req.query.search); res.end(); } [description]
 // * @return {[type]} [description]
 // *
 // * req._parsedUrl.search: /?search=apples%2C+bananas
 // * req.url: Object {search: "apples, bananas"}
 // * req.query = Object {
 //    search: "apples, bannanas"
 // }

 // router.use(function(req, res, next) {

 //     // log each request to the console
 //     console.log('----------------------------------------------------------------------');
 //     console.log(req.method, req.url);


 //     // continue doing what we were doing and go to the route
 //     next();
 // });