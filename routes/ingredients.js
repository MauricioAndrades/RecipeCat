var express = require('express');
var url = require('url');
var qs = require('qs');
var unirest = require('unirest');
var rp = require('request-promise');
var request = require('request');
var axios = require('axios');
require('dotenv').load();
var router = express.Router();



router.get('/', function(request, response) {
    var qString = qs.stringify(request.query);
    var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
    var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    var number = "&number=6";
    var searchQ = ApiEndpoint + qString + number;


    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5', {
/*          url: '/user',
          baseURL: 'https://some-domain.com/api/',*/
          method: 'get',
          transformRequest: [function (data) {
            return data;
          }],
          transformResponse: [function (data) {
            return data;
          }],
          headers: {"X-Mashape-Key": process.env.APIKEY},
        /*  params: {*/
        /*    ID: 12345*/
        /*  },*/
        /*  paramsSerializer: function(params) {*/
        /*    return Qs.stringify(params, {arrayFormat: 'brackets'})*/
        /*  },*/
        /*  data: {*/
        /*    firstName: 'Fred'*/
        /*  },*/
          timeout: 1000,
          withCredentials: false,
        /*  auth: {*/
        /*    username: 'janedoe',*/
        /*    password: 's00pers3cret'*/
        /*  }*/
          responseType: 'json', // default
          xsrfCookieName: 'XSRF-TOKEN', // default
          xsrfHeaderName: 'X-XSRF-TOKEN' // default
        })
        .then(function(response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            response.send(response.data);
        })
        .catch(function(response) {
            console.log(response);
        });
});

module.exports = router;