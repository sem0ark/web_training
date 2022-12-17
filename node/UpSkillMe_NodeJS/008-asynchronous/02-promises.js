
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.17
 * 
 * Callbacks are really handy for standard purposes,
 *  but when we need to managed a code with nested and branching callbacks
 *  it is hard to keep the code readable
 * 
 * To solve the problem we use Promises:
 * 1. it has properties: {
 *    state: "status"
 *    result: undefined
 * }
 * 2. When the opertation is complete one of two functions are called;
 *      -> resolve -> positive outcome
 *      -> reject  -> negative outcome
 *    These methods change the properties in Promise
 * 
 * Example:
 * let prom = new Promise(
 *  (resolve, reject) => {
 *  // do something...
 *  if  true) {
 *    resolve(result);
 *  } else {
 *    reject(error);
 *  }
 * });
 * 
 * After that we can chain additional methods:
 * prom
 *  .then((result) => {
 *    // do something
 *    return(newResult);
 *  })
 *  .then((result) => {
 *    // do somethign else...
 *    return(finalResult);
 *  });
 * 
 * Further reading:
 * 1. Promises https://javascript.info/promise-basics
 * 
 * */

