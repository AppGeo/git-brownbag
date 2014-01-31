'use strict';

var request = require('request');

exports.stuff = function (callback) {
  request('http://ctbb.betal1.appgeo.com/api/providers', {
    json: true
  }, function (err, resp) {
    if (err) {
      callback('not found');
    } else {
      callback(null, resp.body);
    }
  });
};