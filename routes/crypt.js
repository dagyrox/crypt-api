var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var defaultKey = '<your default password here>';

exports.encrypt = function(text, key){
    var _key = key || defaultKey;
    var cipher = crypto.createCipher(algorithm, _key);
    var crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');

    return crypted;
}

exports.decrypt = function(text, key){
    var _key = key || defaultKey;
    var decipher = crypto.createDecipher(algorithm, _key);
    var dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');

    return dec;
}
