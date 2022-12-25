/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * We can just pass data from one stream to another with pipe method.
 * Pipe method isn't handling only errors, so you don't need 
 * 
 * */

const fs = require('fs');

function main_write_pipe() {
  const readStream = fs.createReadStream('./powder-day.mp4');
  const writeStream = fs.createWriteStream('./powder-day-copy.mp4');

  readStream.pipe(writeStream);

  readStream.on('end', () => console.log('completed'));
}


function main_pipe() {
  const writeStream = fs.createWriteStream('./dummy.txt');
  process.stdin.pipe(writeStream);
}

main_pipe();
