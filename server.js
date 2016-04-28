var express = require('express'),
	path = require('path');

var app = express();

app.get('/', function(req, res, next) {
	res.sendFile('index.html');
});

app.get(/^(.+)$/, function(req, res, next) {
	console.log('Static file request: ' + req.params);
	res.sendFile(__dirname + req.params[0]);
}

var port = process.env.PORT || 80;
app.listen(port, function() {});