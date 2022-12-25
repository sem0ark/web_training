/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * Streams is the way to pas data in doable chuncks,
 *   which can enchance efficiency of RAM usage and shrink
 *   the time needed to get/watch data.
 * 
 * So, you will practice using streams with HTTP requests, handling range requests,
 * forking streams, and handling file uploads with streams.
 * Also, you will examine how to parse a multipart request with the NPM package multiparty.
 * 
 * We can use `http` and `stream` to transmit data through the network. 
 * 
 * */

const { createServer } = require('http');
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');

const fileName = '../013-streams/powder-day.mp4'

const fileInfo = promisify(stat); // we use it to convert to a Promise

function main_server_v1() {
  createServer(async (req, res) => {
    const { size } = await fileInfo(fileName);
  
    res.writeHead(200,{
      'Content-Type': 'video/mp4', // the type
      'Content-Length': size, // the size
    });
    // we are specifying what we are sending
    // and what it the size of it.
  
    createReadStream(fileName).pipe(res);
  }).listen(3000, () => console.log('server running - 3000'));
  
  // But this code has a problem, because we can't support the range requests,
  // so we can't, like, skip the part of the video
  // So it would work only in Chrome/Firefox
}

function main_server_range() {
  createServer(async (req, res) => {
    // req/request  - readable stream
    // res/response - writable stream

    const { size } = await fileInfo(fileName);
    const range = req.headers.range;
    // console.log(range);
    // from headers we can get the information about 
    // to handle range requests, we need to parse the `range`.

    if (range) {
      // the range is a string that looks like `bytes='start'-'end?'`
      // so we should parse it first
      let [start, end] = range.replace(/bytes=/, '').split('-');
      start = parseInt(start, 10);
      end   = end ? parseInt(end, 10) : size-1;

      res.writeHead(206, { // 206 means partial content, so we tell the browser that we are handling teh range request
        'Content-Type': 'video/mp4',
        'Content-Length': (end - start) + 1, // Here we should specify the partial length
        'Content-Range': `bytes ${start}-${end}/${size}`, // I am not sure about this string, but it is working...
        'Accept-Range': 'bytes',
      });

      createReadStream(fileName, { start , end }).pipe(res); // We can specify the start and the end of the range

    } else {
      res.writeHead(200,{ 'Content-Type': 'video/mp4', 'Content-Length': size});
      createReadStream(fileName).pipe(res);
    }

  }).listen(3000, () => console.log('server running - 3000'));
}

main_server_range();