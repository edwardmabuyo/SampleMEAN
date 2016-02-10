var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();


require('./handlers/route-handler').handleRoute(app);

app.use(express.static(__dirname + '/public'));









var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
