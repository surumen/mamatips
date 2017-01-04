var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/blog', function(req, res){
  res.render('blog', {
    title: 'Blog'
  });
});

router.get('/android', function(req, res){
  res.render('android', {
    title: 'Android'
  });
});

router.get('/design', function(req, res){
  res.render('design', {
    title: 'Design'
  });
});

router.get('/django', function(req, res){
  res.render('django', {
    title: 'Django'
  });
});

router.get('/front-end', function(req, res){
  res.render('front-end', {
    title: 'Front-End'
  });
});

router.get('/ios', function(req, res){
  res.render('ios', {
    title: 'iOS'
  });
});

router.get('/java-fx', function(req, res){
  res.render('java-fx', {
    title: 'Java'
  });
});

router.get('/msoma', function(req, res){
  res.render('msoma', {
    title: 'M-Soma Institute'
  });
});

router.get('/node-js', function(req, res){
  res.render('node-js', {
    title: 'Node.js'
  });
});

router.get('/ruby-on-rails', function(req, res){
  res.render('ruby-on-rails', {
    title: 'Ruby on Rails'
  });
});

module.exports = router;
