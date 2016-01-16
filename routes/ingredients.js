var express = require('express');
var url = require('url');
var qs = require('qs');
var util = require('util');
var axios = require('axios');
var fs = require('fs');
var PLog = require('bunyan-promise');
require('dotenv').load();
var router = express.Router();



router.get('/', function(req, res) {
    console.log(req.query);
    var qString = qs.stringify(req.query);
    var ApiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
    var ApiIdEndPoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    var number = "&number=6";
    var searchQ = ApiEndpoint + qString + number;

    /*function getRecepiesfromIngredients() {
        return axios.get()
    }*/


    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', {
        url: '/ingredients',
        method: 'get',
        headers: {
            "X-Mashape-Key": process.env.APIKEY
        },
        params: {
            ingredients: req.query.ingredients,
        },
        timeout: 1000,
        withCredentials: false,
        responseType: 'json',
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        transformResponse: [function (data) {
            return JSON.stringify(data);
            // return data;
          }],
    })/*.then(function(data) {
        console.log('--------------------hit');
        var ids = [];
        ids = ids.map(function(index, elem) {
            data.data[i].id;
        })
        for (var i = 0; i < ids.length; i++) {
            console.log(ids[i]);
        }
        return data;
        // fs.writeFile('./data.json', JSON.stringify(data.data, null, 2), 'utf-8');
    })*/
    .then(function(data) {
        console.log(data.data);
        console.log(data.data);
        console.log(data.status);
        console.log(data.statusText);
        console.log(data.headers);
        console.log(data.config);
        res.json(JSON.stringify(data));
    })
    /*.catch(function(data) {
        console.log('error');
        res.end('what happend');
    });*/
    .catch(function (response) {
      if (response instanceof Error) {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', response.message);
      } else {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        console.log(response.config);
      }
    });
});

module.exports = router;