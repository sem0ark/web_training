/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.21
 * 
 * Node.js has been here for around a decade,
 * it is a sungle threaded asychronous technology.
 * Compared to Apache (blocking, multi-threaded).
 * 
 * Global - global object that contains all data and methods available to any file.
 * 
 * require - function that we can use to import other files and modules with Node.js
 * process - object that gives the information about the Node.js process
 *    such as arguments or version of Node
 *    with it we can communicate with teh system
 * */

const path = require("path"); // path module helps us with managing paths
const { versions } = require("process");


let hello = "Hello World From NODE JS";

console.log(hello); // it belongs to the global object, that is available to any file

// ---------------

console.log(__dirname); // current diractory
console.log(__filename); // file name

console.log(`The filename is ${path.basename(__filename)}`);

// ---------------

console.log(process.pid); // returns the ID of the process being run
console.log(process.versions.node); // returns the node version
console.log(process.argv); // return an array of console arguments


