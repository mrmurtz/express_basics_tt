'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express();

app.get('/', function(req, res){
  res.send('<h1>Too good ting</h1>');
});

app.get('/blog', function(req, res){
  res.send(posts);
});

app.listen(3000, function(){
  console.log("Server listening at 3000");
});
