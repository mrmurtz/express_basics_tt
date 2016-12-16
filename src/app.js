'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var postsList = Object.keys(posts).map(function(value){
  return posts[value]
});

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.render('blog', {posts: postsList});
  } else {
    var post = posts[title] || {};
    res.render('post', {post: post});
  }
});

app.listen(3000, function(){
  console.log("Server listening at 3000");
});
