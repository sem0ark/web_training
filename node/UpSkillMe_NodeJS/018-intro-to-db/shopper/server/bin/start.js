#!/usr/bin/env node

// Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
// Completed by Arkadii Semenov on 2023-02-08

const http = require('http');
const mongoose = require('mongoose');

const config = require('../config');
const App = require('../app');

async function connectToMongoose() {
  return mongoose.connect(config.mongodb.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true, // -- said that it's not supported right now
  });
}

/* Logic to start the application */
const app = App(config);
const port = process.env.PORT || '3000';
app.set('port', port);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port  ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const server = http.createServer(app);
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;

  console.info(`${config.applicationName} listening on ${bind}`);
}
server.on('error', onError);
server.on('listening', onListening);

connectToMongoose()
  .then(() => {
    console.info("Successfully Connected to MongoDB");
    server.listen(port);
  }).catch((error) => {
    console.error(error);
  });
