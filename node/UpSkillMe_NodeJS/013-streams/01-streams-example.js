/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * Streams is the way to pas data in doable chuncks,
 *   which can enchance efficiency of RAM usage and shrink
 *   the time needed to get/watch data.
 * 
 * node --trace_gc filename.js
 *  this comand tells the Node to show the behaviour of the garbage collector
 *  from the current session.
 * 
 * There are two types:
 * 1. Mark-sweep - actually stops the NOde process to clear a lot of garbage data
 * 2. Scavege - clears less data and keep Node running
 * 
 * Further reading:
 * Understanding Streams in Node.js
 *  https://nodesource.com/blog/understanding-streams-in-nodejs/
 * 
 * */

const fs = require('fs');
const http = require('http');

const file = './powder-day.mp4';

http.createServer((req, res) => {
  // fs.readFile(file, (err, data) => {
  //   if (err) {
  //     console.log(`hmm: ${error.message}`);
  //   }
  //   res.end(data); // Here we pass all available data to the user -> unefficient and consumes a lot of resourses
  // });

  res.writeHeader(200, {'Content-Type': 'video/mp4'});
  fs.createReadStream(file)
    .pipe(res)
    .on('error', console.error);

  // By the usage of streams we can greately stop the usage of memory
  // so our app would be more efficient

  // We are sending the data bit by bit
}).listen(3000, () => console.log('buffer - http://localhost:3000'));
