/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.24
 * 
 * Node.js ia asynchronous and has only one thread.
 * 
 * To efficiently use it we can use callbacks.
 * 
 * */


function main_1() {
  function hideString(str, done) {
    process.nextTick(() => { // Makes Node ot run the command on the next loop
      done(str.replace(/[[a-zA-Z]]/g, 'X'));
    });
  }

  hideString("Hello World", (hidden) => { // we use a callback here
    console.log(hidden); // Our string is logged on the next loop
  });
  console.log('end');
}

function main_2() {
  function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000);
  }

  console.log('starting delays');
  delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
      console.log('three seconds');
      delay(1, () => {
        console.log('four seconds');
      });
    });
  });

  // Here we create a sequential running with callbacks
  // !! But it is an example of pretty nasty and unreadable code
  // It is also an anti-pattern called *Callback hell* or *Pyramid of doom*.
}

// main_1();
main_2();