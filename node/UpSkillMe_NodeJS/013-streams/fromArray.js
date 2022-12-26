const { Readable } = require('stream');

class StreamFromArray extends Readable {
  constructor(arr) {
    super({ objectMode: true});
    this.array = arr;
    this.index = 0;
  }

  _read() {
    if (this.index < this.array.length) this.push(this.array[this.index++]);
    else this.push(null);
  }
}

/**
 * @desc Makes a stream from an array of data.
 * @param array (any[]) - Array of data.
 * @return Readable - that emits every element of the array from left to right. Emits null when all elements
 * were pushed.
 */
module.exports = (array) => {
  return new StreamFromArray(array);
}
