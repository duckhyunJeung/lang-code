var express = require('express');
var router = express.Router();
var url = require('url');
var ko = require('../kor.json');
var en = require('../eng.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  let data = ko;
  if(Object.keys(query).length > 0) {
     if(query.lang === 'en') {
       data = en;
     }
  }
  res.render('index', { data: data});
});

module.exports = router;
