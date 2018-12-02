'use strict';
const express = require('express'),
	app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(__dirname + '/resources'));
app.get('/', function(req,res){
	res.render('login');
});
app.get('/home', function(req,res){
	res.render('index');
});
app.get('/feed', function(req,res){
	res.render('feed');
});

app.listen(11000);