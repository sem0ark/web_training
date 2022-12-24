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
    process.nextTick(() => {
      done(str.replace(/[[a-zA-Z]]/g, 'X'));
    });
  }

  hideString("Hello World", (hidden) => { // we use a callback here
    console.log(hidden);
  });
  console.log('end');
}


main_1();
