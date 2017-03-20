var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var defaultKey = '<your default password here>';

exports.encrypt = function(term, key){
    if(!term){
        return;
    }

    var _key = key || defaultKey;
    var cipher = crypto.createCipher(algorithm, _key);
    var crypted = cipher.update(term,'utf8','hex');
    crypted += cipher.final('hex');

    return crypted;
}

exports.decrypt = function(term, key){
    if(!term){
        return;
    }
    
    var _key = key || defaultKey;
    var decipher = crypto.createDecipher(algorithm, _key);
    var dec = decipher.update(term,'hex','utf8');
    dec += decipher.final('utf8');

    return dec;
}
