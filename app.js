var express = require('express');
var ip = require('ip');
var logger = require('./logger');

var app = express();
var visits = 0;

app.get('/', function (req, res) {
  res.send('Hello World! ' + ++visits);
});

var port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, function () {
  logger.info('Typer server is running on: ' + ip.address() + ":" + port);
});