/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * By the use of callbacks we can quickly run into an anti-pattern called Calback hell,
 * so to settle things down we can use Promises.
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

  
}
