'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Boom ting');
});

app.listen(3000);
