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
 * 
 * */

function main_resolving() {
  const delay_prom = (seconds) => new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('The long delay has ended') // here we can pass some data
    }, seconds*1000);
    // once we have the successful completion
    // we can use .then method, which would get the resolve data
  });

  function delay_callback(seconds, callback) {
    setTimeout(callback, seconds * 1000);
  }

  delay_prom(1)
    .then((message) => console.log(message))
    .then(() => {
      console.log("Hello World");
      return 42; // we can return other values to the next 'then' statements
    })
    .then((num) => console.log("Another then", num));
  
    console.log('end first tick');
}


function main_rejecting() {
  const delay_prom = (seconds) => new Promise((resolve, reject) =>{

    // throw new Error('argh');
    if (seconds > 3) {
      reject(new Error(`${seconds} is too long!`));
      // we can use reject function to invoke .catch branch handling
    }
    // without .catch we would get unhandled Error message
    // We need to use .catch notation to handle all possible problems

    setTimeout(() => {
      resolve('The long delay has ended')
    }, seconds*1000);
  });

  delay_prom(4)
    .then((message) => console.log(message))
    .then(() => {
      console.log("Hello World");
      return 42; // we can return other values to the next 'then' statements
    })
    .then((num) => console.log("Another then", num))
    .catch((error) => console.log(`error: ${error.message}`));
    // here we handle the error with the .catch notation.
    // we don't have to have error to use it
    // we can just use reject
  
    console.log('end first tick');
}

function main_promisifying() {
  const { promisify } = require('util');

  // JS creates a simple way to convert the function with callbacks
  // to a Promise, so we can handle them in a more readable way

  const delay = (seconds, callback) => {
    if (seconds > 3) {
      callback(new Error(`${seconds} is too long!`));
      // it is a standard that we pass errors as the first argument for the callback
    } else {
      setTimeout(() => 
        callback(null, 'The long delay has ended'),
        // if there are no Errors we just pass null
        seconds*1000
      );
    }
  };

  const promiseDelay = promisify(delay);
  promiseDelay(2)
    .then(console.log)
    .catch(error => console.log(`error: ${error.message}`));
}

function main_promisifying_example() {
  // Here we can see an example of using promisify the function from fs module

  const { promisify } = require('util');
  const fs = require('fs');

  const writeFile = promisify(fs.writeFile);

  writeFile('dummy.txt', 'This is a sample')
    .then(console.log('file was created'))
    .catch(error => console.log(error.message));
}

// main_promisifying_example();

function main_callback_solution() {
  const fs = require('fs');
  const { promisify } = require('util');

  const writeFile = promisify(fs.writeFile);
  const unlink = promisify(fs.unlink);
  const delay = (seconds) => new Promise((resolve) =>{
    setTimeout(resolve, seconds*1000);
  });

  const beep = () => process.stdout.write("\x07");

  const doStuffSequentiallyCB = () => {
      console.log('starting');
      setTimeout(() => {
          console.log('waiting');
          setTimeout(() => {
              console.log('waiting some more');
              fs.writeFile('file.txt', 'Sample File...', error => {
                  if (error) {
                      console.error(error);
                  } else {
                      beep();
                      console.log('file.txt created')
                      setTimeout(() => {
                          beep();
                          fs.unlink('file.txt', error => {
                              if (error) {
                                  console.error(error);
                              } else {
                                  console.log('file.txt removed');
                                  console.log('sequential execution complete');
                              }
                          })
                      }, 3000)
                  }
              });
          }, 2000)
      }, 1000)
  } // Big and scary example of the pyramid of doom

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
  // Here we managed to specify the same code with the use of Promises, so it is much cleaner!
  doStuffSequentiallyPR();
}

main_callback_solution();
