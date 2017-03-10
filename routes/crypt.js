var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var defaultPassword = '<your default password here>';

exports.encrypt = function(text, password){
    var _password = password || defaultPassword
    var cipher = crypto.createCipher(algorithm, _password);
    var crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');

    return crypted;
}

exports.decrypt = function(text, password){
    var _password = password || defaultPassword
    var decipher = crypto.createDecipher(algorithm, _password);
    var dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    
    return dec;
}