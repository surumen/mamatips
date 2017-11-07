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

router.get('/contact/error', function(req, res){
  res.render('email_error', {
    title: 'Email Error'
  });
});

router.get('/contact/success', function(req, res){
  res.render('email_success', {
    title: 'Email Success'
  });
});

router.get('/error', function(req, res){
  res.render('error', {
    title: '404 Error'
  });
});


module.exports = router;
