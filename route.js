'use strict';

var app = module.exports = require('express')();
var request = require('request');

app.get('/:lat/:lng', function (req, res) {
  request('http://ctbb.betal1.appgeo.com/api/providers', {
    json: true,
    qs:{
      lat: req.params.lat,
      lng: req.params.lng
    }
  }, function (err, resp) {
    if (err) {
      res.send(404);
    } else {
      res.jsonp(resp.body);
    }
  });
});