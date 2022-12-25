/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * Duplex stream is a stream that can read *and* write data. THey are present in the middle of pipe lines.
 * 
 * */

const fs = require('fs');
const stream = require('stream');

class Throttle extends stream.Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay); // Here we throttle the chunks being passed
  }

  _read() {}

  _final() {
    this.push(null);
  }
}

function main_write_pipe() {
  const readStream = fs.createReadStream('./powder-day.mp4');
  const writeStream = fs.createWriteStream('./powder-day-copy.mp4');

  const report = new stream.PassThrough();
  // Typical duplex stream we can check and examine some data
  // Typical duplex streams don't change the data
  //    if it is changed teh stream is called transform stream

  const throttle = new Throttle(10); // With it we can limit the speed

  let total = 0;
  report.on('data', (chunk) => {
    total += chunk.length;
    console.log('bytes: ', total);
  });

  readStream
    .pipe(throttle)
    .pipe(report)
    .pipe(writeStream);
}

main_write_pipe();