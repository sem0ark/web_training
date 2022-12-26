const { Readable } = require('stream');
const fs = require('fs');

const path = require('path');

class DIYStream extends Readable {
  constructor(filePath) {
    super();
    this.readLength = 65536;
    this.index = 0;
    this.text = fs.readFileSync(filePath);
  }

  _read() {
    if (this.index * this.readLength < this.text.length) {
      const start = this.readLength * this.index;
      const end   = Math.min(this.readLength * (this.index + 1), this.text.length);
      this.index++;
      console.log(start, end, end-start, this.index);

      // const buf = Buffer.alloc(end-start, this.text.slice(start, end));
      this.push(this.text.subarray(start, end));
    } else {
      this.push(null);
    }
  }
}

function createReadableStream(filePath) {
  return new DIYStream(filePath);
}

module.exports = createReadableStream;
