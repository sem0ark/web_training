const http = require('http');

const logger = require('../shared/lib/logger');
const config = require('./config');
const app = require('./app');

const server = http.createServer(app);

server
  .listen(config.server.port)
  .on('listening', () => logger.info(`HTTP Server listens on port ${config.server.port}`));
