const logger = require('../shared/lib/logger');

const http = require('http');
const config = require('./config');

import('./app.js', (app => {
  const server = http.Server(app);

  server
    .listen(config.server.port)
    .on('listening', () => logger.info(`HTTP Server listens on port ${config.server.port}`));
}));

