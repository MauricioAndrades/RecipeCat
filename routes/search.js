var express = require('express');
var router = express.Router();


/**
 * ROUTE THAT RECEIVES CLIENT SIDE AJAX REQUEST
 * @param {object} req req object made on clientside
 * @param {object} res response object sent back to client
 * @param {function} next) { console.log("req.query.search: " + req.query.search); res.end(); } [description]
 * @return {[type]} [description]
 */
router.get('/', function(req, res, next) {
  console.log("req.query.search: " + req.query.search);
  res.end();
  });

module.exports = router;
