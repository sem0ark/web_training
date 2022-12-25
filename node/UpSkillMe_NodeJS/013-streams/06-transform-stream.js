/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * Transform stream is a middle stream that can read *and* write data.
 * They are named in that way, because they can change the data being passed.
 * 
 * */

const stream = require('stream');

class ReplaceText extends stream.Transform {
  constructor(char) {
    super();
    this.replaceChar = char;
  }

  _transform(chunk, encoding, callback) {
    const transformChunk = chunk
      .toString()
      .replace(/[a-z]|[A-Z]/g, this.replaceChar);
    
    this.push(transformChunk);
    callback();
  }

  _flush(callback) {
    this.push('More stuff is being passed...');
    callback();
  }
}

function main_transform() {
  const xStream = new ReplaceText('chinken ');
  process.stdin.pipe(xStream).pipe(process.stdout);
}
main_transform();