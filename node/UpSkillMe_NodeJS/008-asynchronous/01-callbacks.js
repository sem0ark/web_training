
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.17
 * 
 * Sychrounous program flow:
 * 1. One statement at a time
 * 2. STatements are executed in order
 * 3. It is also called "Blocking", because the next statement is blocked from execution util the previous one is executed
 * 
 * Asynchronous program flow:
 * 1. Multiple statements at once
 * 2. Statements executed simultaneously
 * 3. Non-blocking
 * 
 * JS has a single thread, but it has the mechanism for moving throug the remaining.
 * It is used with something like AJAX -> it is default to asynch.
 * 
 * Asynch JS functions:
 * 1. AJAX methods, XMLHttpRequest methods
 * 2. setTimeout
 * 3. 
 * 
 * How to work with asynch?:
 * Callback pattern
 * - asynch function runs in parallel with the main program
 * - asynch function has as a papameter another function called callback function
 * - callback function is run after the asuch function is over
 * 
 * */

const fs = require('fs');
const key = fs.readFileSync('./008-asynchronous/key.txt', 'utf8');

// setTimeout(() => { console.log('hello'); }, 500);
// When setTimeout is called it is moved to the parallel branch of execution
// After the passing the time of 500 ms, the callback function is run


function main_example() {
  console.log("Hi!");
  setTimeout(() => {
    console.log("Asynch result");
  }, 1000);
  console.log("Synch result");
}

function main_practice() {
  let httpRequest = new XMLHttpRequest();
}


main_example()
main_practice()