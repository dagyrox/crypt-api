// for running app in linux, as service, using pm2
// #!/usr/bin/env nodejs

// Command line arguments: [port number]
var bodyParser = require('body-parser');
var crypt = require('./routes/crypt');
var express = require('express');
var log = require('./logging/logging');

var portNum = process.argv[2] || 80;
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/encrypt', function(req, res) {
    if(req.body){
        var term = req.body.term;
        var key = req.body.key;
        res.send(crypt.encrypt(term, key));
    }
});

app.post('/decrypt', function(req, res) {
    if(req.body){
        var term = req.body.term;
        var key = req.body.key;
        res.send(crypt.decrypt(term, key));
    }
});

app.listen(portNum);

log.log('Listening on port ' + portNum + '...');
