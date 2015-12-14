var express = require('express'),
	bodyParser = require('body-parser'),
 	methodOverride = require('method-override'),
 	fs = require('fs'),
 	path = require('path');

module.exports = function(app, io){
	app.set('view engine', 'html');
	app.engine('html', require('ejs').renderFile);
	app.use(bodyParser.urlencoded({ extended: false}));
	app.use(bodyParser.json());
	app.use(methodOverride('X-HTTP-Method'));          // Microsoft
	app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
	app.use(methodOverride('X-Method-Override')); 

};
