const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      timestamp: new Date().toISOString(), // include time and date
      colorize: true, // add color
    }),
  ], // where to send data
});

module.exports = logger;
