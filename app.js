var express = require('express');
var crypt = require('./routes/crypt');

    
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/encrypt', function(req, res) {
    var term = req.query.term;
    var password = req.query.password;
    res.send(crypt.encrypt(term, password));
});

app.get('/decrypt', function(req, res) {
    var term = req.query.term;
    var password = req.query.password;
    res.send(crypt.decrypt(term, password));
});

app.listen(3000);

console.log('Listening on port 3000...');