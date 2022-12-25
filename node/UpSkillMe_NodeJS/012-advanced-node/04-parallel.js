/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * We can run multiple promises at the same time.
 * By the use of Promise.all() we can simplify our code with asynchronous loops.
 * So, we create a single Promise to resolve all "sub-Promises".
 * 
 * Further reading:
 * [All You Need to Know About Promise.all()](https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/)
 * 
 * */


const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const unlink    = promisify(fs.unlink);
const readdir   = promisify(fs.readdir);

const delay = (seconds) => new Promise((resolve) =>{
  setTimeout(resolve, seconds*1000);
});
const beep = () => process.stdout.write("\x07");

function main_par_files() {
  Promise.all([
    writeFile('dummy.md', 'Hello World'),
    writeFile('dummy.txt', 'Hello World'),
    writeFile('dummy.json', '{ "hello" : "world"}'),
  ])
  .then(() => readdir(__dirname))
  .then(console.log)
  // Here we would wait for all these Promises to resolve.
  // Only after that we woiuld run .then
  
  .then(Promise.all([
    unlink('dummy.md'),
    unlink('dummy.txt'),
    unlink('dummy.json'),
  ]))
  .then(() => readdir(__dirname))
  .then(console.log);
}

function main_par_delays() {
  Promise.all([
    // It would wait for all promises to resolve
    // So the time waiting would be "max" of all of them (5 seconds in that case)
    delay(2),
    delay(5),
    delay(4),
  ])
  .then(() => "ALL waiting completed")
  .then(console.log);

  Promise.race([
    // It would wait for any promises to resolve
    // So the time waiting would be "min" of all of them (5 seconds in that case)
    delay(2),
    delay(5),
    delay(4),
  ])
  .then(() => "ANY waiting completed")
  .then(console.log);
}

main_par_delays();