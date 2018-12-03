'use strict';
const express = require('express'),
	app = express(),
	passport = require('passport');
const twitterAuth = require('./modules/twitterAuth.js');

app.use(require('express-session')({ secret: 'super secret text here', resave: true, saveUninitialized: true }));

twitterAuth();

app.use(passport.initialize());
app.use(passport.session());


//Sets the view engine to render pug into html
app.set('view engine', 'pug');

//sets the views folder to views
app.set('views', 'views');

//sets the folder "resources" as an available file path to allow styles and media to be stored and accessed there
app.use(express.static(__dirname + '/resources'));

//response when navigating to "root"
app.get('/', function(req,res){
	// try{console.log(req.user.screen_name);}catch(ex){console.log();}
	if(req.user === undefined){//User login check
		res.render('login', {username: 'Login with Twitter'});// not logged in --> login page
	}else{
		res.render('index',{username: req.user.displayName});// is  logged in --> home  page
	}
});
//response when navigating to "feed"
app.get('/feed', function(req,res){//No need for login check. Simple page for a live feed of the site's hashtag
	res.render('feed', {username: req.user === undefined ? 'Login with Twitter' : req.user.displayName });
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
	passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

app.listen(11000);
