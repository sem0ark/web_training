const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [new (winston.transports.Console)({
    timestamp: new Date().toISOString(), // include time and date
    colorize: true, // add color
  })], // where to send data
});

module.exports = logger;
