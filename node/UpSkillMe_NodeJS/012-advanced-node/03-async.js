/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * By the use of callbacks we can quickly run into an anti-pattern called Calback hell,
 * so to settle things down we can use Promises.
 * 
 * Further reading:
 * The Node.js Event Loop, Timers, process.nextTick()
 *    https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
 * Getting started with async iterators in Node.js
 *    https://thecodebarbarian.com/getting-started-with-async-iterators-in-node-js.html
 * 
 * */

function main_callback_solution_aa() {
  const fs = require('fs');
  const { promisify } = require('util');

  const writeFile = promisify(fs.writeFile);
  const unlink = promisify(fs.unlink);

  const delay = (seconds) => new Promise((resolve) =>{
    setTimeout(resolve, seconds*1000);
  });
  const beep = () => process.stdout.write("\x07");

  const doStuffSequentiallyPR = () => Promise.resolve()
    .then(() => console.log('starting'))
    .then(() => delay(1))
    .then(() => 'waiting')
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile('dummy.txt', 'Sample file'))
    .then(beep)
    .then(() => 'dummy.txt was created')
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink('dummy.txt'))
    .then(beep)
    .then(() => 'dummy.txt was deleted')
    .then(console.log)
    .catch(console.error);
  // Here is the example of using promises to write the sequential code

  const doStuffSequentiallyAA = async () => {
    console.log('starting')
    await delay(1);
    console.log('waiting');
    await delay(2);
    try {  
      await writeFile('dummy.txt', 'Sample file');
      beep();
      console.log('dummy.txt was created');
    } catch (error) {
      console.error(error);
    }

    await delay(3);
    await unlink('dummy.txt');
    beep();
    console.log('dummy.txt was deleted');

    return Promise.resolve();
    // This line enables us to use Promise functionality and chaining .then
    //  Later without creating additional code
    // We can also use it with other Async/Await functions
  }

  doStuffSequentiallyAA();
}

// main_callback_solution_aa();

function main_async_data() {
  // we can get data from async functions in the same way as working with Promises
  // in AA notation - just like standard functions.

  const fs = require('fs');
  const { promisify } = require('util');

  const readdir = promisify(fs.readdir);

  // readdir('.')
  //   .then((files => files.forEach(file => console.log(file))));
  // Promise example

  const read = async () => {
    const files = await readdir('.');
    console.log(files);
  }
  read();

  // Async/await example
}

main_async_data();