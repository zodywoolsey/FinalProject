'use strict';
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
module.exports = function(){
	
	passport.use(new TwitterStrategy({
		consumerKey: '0VUPhIeG96AquyJToFWjkXJrE',
		consumerSecret: 'Rc79dPusWqXIJkk9u64Zq1EohJeC5DSwbp18YlEZeE3Hkq9Ui9',
		callbackURL: '/auth/twitter/callback'
	},
	function(token, tokenSecret, profile, cb) {
		return cb(null, profile);
	}
	));

	passport.serializeUser(function(user, cb) {
		cb(null, user);
	});

	passport.deserializeUser(function(obj, cb) {
		cb(null, obj);
	});

};