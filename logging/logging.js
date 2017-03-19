// create a rolling file logger based on date/time
const opts = {
    logDirectory:'./logs',
    fileNamePattern:'roll-<DATE>.log',
    dateFormat:'YYYY.MM.DD'
};

const rollingLog = require('simple-node-logger').createRollingFileLogger( opts );
const consoleLog = require('simple-node-logger').createSimpleLogger();

exports.log = function (message){
    rollingLog.info(message);
    consoleLog.info(message);
}