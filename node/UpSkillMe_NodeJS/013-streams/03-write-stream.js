/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * Write stream is the putput of our data.
 * 
 * Sometimes we are writing too fast for teh destination of the data.
 * It is called a *backpressure* and it can cause data leacage or lags.
 * The destination can handle the data
 * with some speed and cache for processing some amount of data highWaterMark.
 * */

const fs = require('fs');

function main_write() {
  const readStream = fs.createReadStream('./powder-day.mp4');
  const writeStream = fs.createWriteStream('./powder-day-copy.mp4', {
    // highWaterMark: 6400000, // we can allow for bigger/lower house
  });

  readStream.on('data', (chunk) => {
    if (!writeStream.write(chunk)) {
      readStream.pause();
      console.log('Backpressure, stop.');
    }
  });

  readStream.on('end', () => {
    writeStream.end();
  });

  readStream.on('error', (error) => console.error('An error has occured.', error.message));

  writeStream.on('drain', () => { // This would be triggered if 
    console.log('Drained, continue pouring.');
    readStream.resume();
  });

  writeStream.on('close', () => {
    process.stdout.write('file copied\n'); // process.stdout is also a writing stream
  });
}

main_write();