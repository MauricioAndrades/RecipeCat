var express = require('express');
var url = require('url');
var qs = require('qs');
var axios = require('axios');
require('dotenv').load();
var router = express.Router();




router.get('/', function(req, res) {
    console.log(req.query);
    var qString = qs.stringify(req.query);
    var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
    var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    var number = "&number=6";
    var searchQ = ApiEndpoint + qString + number;


    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients'
, {
          url: '/ingredients',
          // baseURL: 'https://some-domain.com/api/',
          method: 'get',
/*          transformRequest: [function (data) {
            return data;
          }],*/
          /*transformResponse: [function (data) {*/
          /*  return data;*/
          /*}],*/
          headers: {"X-Mashape-Key": process.env.APIKEY},
          params: {
            ingredients: req.query.ingredients,
          },
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
        .then(function(data) {
            console.log(data.data);
            console.log(data.status);
            console.log(data.statusText);
            console.log(data.headers);
            console.log(data.config);
            res.json(data);
        })
        .catch(function(data) {
            console.log(data);
            res.render('what happend');
        });

});

module.exports = router;