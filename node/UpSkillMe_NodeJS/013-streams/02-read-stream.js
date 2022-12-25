/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * Streams is the way to pas data in doable chuncks,
 *   which can enchance efficiency of RAM usage and shrink
 *   the time needed to get/watch data.
 * 
 * Readable stream reads data from the file and passes it chunk by chunk.
 * 
 * REadable streams are used everywhere:
 * - files
 * - internet
 * - zipping
 * - etc.
 * 
 * */

const { Readable } = require('stream');

const fs = require('fs');


const peaks = [
  "Tallac",
  "Ralston",
  "Rubicon",
  "Twin Peaks",
  "Castle Peak",
  "Rose",
  "Freel Peak"
];


class StreamFromArray extends Readable {
  constructor(arr) {
    // super({ encoding: 'utf-8' });
    super({ objectMode: true});
    // without passing the encoding we would use the binary mode for reading from the stream
    // by passing objectMode:true we would be able to pass any type of JS object
    this.array = arr;
    this.index = 0;
  }

  _read() {
    if (this.index < this.array.length) {
      // const chunk = this.array[this.index]; // if you send as a string
      const chunk = {
        data: this.array[this.index],
        index: this.index,
      }
      this.push(chunk); // actually sending the data
      this.index++;
    } else {
      this.push(null); // sending a signal that the reading is over
    }
  }
}

function main_read() {
  const stream = new StreamFromArray(peaks);

  stream.on('data', (chunk) => {
    console.log(chunk);
  }); // the event os triggered when the stream sends the data

  stream.on('end', (chunk) => {
    console.log('Done!');
  });
}

// main_read();

function main_using() {
  const readStream = fs.createReadStream('./powder-day.mp4');
  readStream.on('data', (chunk) => {
    console.log('Reading little chunk\n Of length: ', chunk.length);
  });
  // Because we are reading the data non-stop, we can say that hte stream is in flowing mode
  // By invoking the method pause, we can make it asking for the next bit of data

  readStream.on('end', () => console.log('Read stream finished'));

  readStream.on('error', (error) => {
    console.log('An error has occured.');
    console.error(error);
  })

  readStream.pause(); // Here we are stopping teh stream
  process.stdin.on('data', (chunk) => {
    const text = chunk.toString().trim();
    if (text === 'finish') {
      readStream.resume();
    }
    readStream.read();
  });
}

// main_using();