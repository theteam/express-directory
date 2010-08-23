// node dependencies
var sys = require('sys');
var fs = require('fs');
// module dependencies
// filesystem references are post correct after running ndistro
var express = require('./modules/express');
var ejs = require('./modules/ejs');

// config
var app = express.createServer();
app.use(express.staticProvider(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// Here we use the bodyDecoder middleware
// to parse urlencoded request bodies
// which populates req.body
app.use(express.bodyDecoder());
// Required by session
app.use(express.cookieDecoder());
// The methodOverride middleware allows us
// to set a hidden input of _method to an arbitrary
// HTTP method to support app.put(), app.del() etc
app.use(express.methodOverride());

app.get('/', function(req, res){
	console.log('displaying homepage');
	res.render('index.ejs');
});

app.listen(3000);