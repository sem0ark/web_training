const { Transform } = require('stream');

class MapStream extends Transform {
  constructor(transformFunc) {
    super({ objectMode: true });
    this.transform = transformFunc;
  }

  _transform(chunk, encoding, callback) {
    this.push(this.transform(chunk));
    callback();
  }

  _flush(callback) {
    callback();
  }
}

/**
 * @param modify (Function) - Callback function that is applied to every element of received data.
 * @return Transform stream that emits a data it receives with modify callback applied to the data.
 */
module.exports = (modify) => {
  return new MapStream(modify);
}
