'use strict';

var express = require('express');
var get = require('./get');
var app = express();

// put me in later
app.use(express.compress());
// after  you do cors-middleware.js
app.use(require('./cors-middleware'));

app.get('/:name', function (req, res) {
  res.send('hello ' + req.params.name);
});

app.get('/', function (req, res) {
  get.stuff(function (err, data) {
    if (err) {
      res.send(404, err);
    } else {
      res.jsonp(data);
    }
  });
});

// second version
app.use(require('./route'));

app.listen(3000);
console.log('app is listening on port 3000');
