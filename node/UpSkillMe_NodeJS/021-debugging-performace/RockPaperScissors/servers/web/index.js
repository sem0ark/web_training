const logger = require('../shared/lib/logger');

const app = require('./app');
const http = require('http');
const config = require('./config');

const server = http.Server(app);

server
  .listen(config.server.port)
  .on('listening', () => logger.info(`HTTP Server listens on port ${config.server.port}`));
