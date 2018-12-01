'use strict';
const express = require('express'),
    app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.get('/', function(req,res){
    res.render('index');
})
app.get('/home', function(req,res){
    res.render('home');
})
app.get('/feed', function(req,res){
    res.render('feed');
})

app.listen(11000);