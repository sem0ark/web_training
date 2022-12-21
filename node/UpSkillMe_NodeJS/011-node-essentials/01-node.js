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
 * By using process module, we can finally create some IO for the user and even some fancy features like progress bars!
 * We can also create asynchronous code using timing functions such as setTimeout and setInterval.
 * */

const { time } = require("console");
const path = require("path"); // path module helps us with managing paths
const { versions } = require("process");

function main() {
  let hello = "Hello World From NODE JS";
  console.log(hello); // it belongs to the global object, that is available to any file
  console.log(__dirname); // current diractory
  console.log(__filename); // file name
  console.log(`The filename is ${path.basename(__filename)}`);
}

function main_process() {
  console.log(process.pid); // returns the ID of the process being run
  console.log(process.versions.node); // returns the node version
  // return an array of console arguments
  // const [, , firstName, lastName] = process.argv;

  const grab = flag => {
    let indAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indAfterFlag];
  }

  const greeting = grab("--greeting");
  const user = grab("--user");

  console.log(`${greeting}, my name is ${user}`);
}

function main_IO() {
  let questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
  ];

  let answers = [];

  const ask = (i = 0) => {
    process.stdout.write(`\n ${questions[i]}`);
    // with process.stdout.write we can print some text
    // to the console with more control on the output than console.log
    // Don't forget to place a new line character!
    process.stdout.write(` > `);
  }
  ask();
  process.stdin.on('data', (data) => { // input from the user is implemented in the asynchronous way with the callbacks
    // process.stdout.write(`Your answer is ${data.toString().trim()}`);
    answers.push(data.toString().trim());
    // the program would cotinue working and getting the input from the user
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit(); // Use process to exit from the program
    }
  });

  process.on('exit', () => {
    const [name, activity, language] = answers;
    console.log(`
Thank you for your answers:
Go ${activity} ${name} you can write ${language} later!`);
  });
}

function main_timing() {
  const waitTime = 5000;
  const waitInterval = 500;
  let currentTime = 0;

  const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    // console.log(`waiting ${currentTime / 1000} seconds`);

    process.stdout.clearLine(); // Clears the last line in the terminal
    process.stdout.cursorTo(0); // Moving the cursor
    process.stdout.write(`waiting... ${p}%`);
  }

  console.log(`setting a ${waitTime / 1000} seconds delay`);
  const interval = setInterval(incTime, waitInterval); // It would call incTime over and over every interval

  const timerFinished = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('done');
    clearInterval(interval);
  }

  setTimeout(timerFinished, waitTime);
}

// main_timing();