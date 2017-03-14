// for running app in linux, as service, using pm2
// #!/usr/bin/env nodejs
var express = require('express');
var crypt = require('./routes/crypt');

var portNum = 80;
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/encrypt', function(req, res) {
    var term = req.query.term;
    var key = req.query.key;
    res.send(crypt.encrypt(term, key));
});

app.get('/decrypt', function(req, res) {
    var term = req.query.term;
    var key = req.query.key;
    res.send(crypt.decrypt(term, key));
});

app.listen(portNum);

console.log('Listening on port ' + portNum);
