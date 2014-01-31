'use strict';

var express = require('express');
var request = require('request');

var app = express();

//put me in latter
app.use(express.compress());
//after  you do cors-middleware.js
app.use(require('./cors-middleware'));

//first version
app.get('/', function (req, res) {
  request('http://ctbb.betal1.appgeo.com/api/providers', {
    json: true,
    qs:{
      lat: 41.18078578212309,
      lng: -73.51166725158691
    }
  }, function (err, resp) {
    if (err) {
      res.send(404);
    } else {
      res.jsonp(resp.body);
    }
  });
});

//second version
app.use(require('./route'));

app.listen(3000);
console.log('app is listning on port 3000');