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
        xsrfHeaderName: 'X-XSRF-TOKEN'
    }).then(function(data) {
        console.log('--------------------hit');
        for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i].id);
        }
        // fs.writeFile('./data.json', JSON.stringify(data.data, null, 2), 'utf-8');
    })
    .then(function(data) {
        console.log(data.data);
        console.log(data.status);
        console.log(data.statusText);
        console.log(data.headers);
        console.log(data.config);
        res.json(data)
    })

    .catch(function(data) {
        console.log(data);
        res.render('what happend');
    });
});

module.exports = router;