/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.21
 * 
 * require - function to load modules, which are hosted on npm or installed locally.
 *            (they are also named as *core modules*).
 * All required functions can be destructured from the modules.
 * It is like "from ... import ..."
 * 
 * readline -  provides a way to get user input
 * v8       - provides startistics from PC usage
 * util     - provides with the set of additional functionality
 * path     - provides with the set of functions to work with paths
 * 
 * We can use EvenEmitters to create a pop-sub structure with Node.js
 * 
 * */

const { count } = require("console");
const { stderr } = require("process");

function main_core() {  
  const path = require("path"); // Used for safely using paths
  const { log } = require("util"); // modu;e with a lot of utility functionality
  const { getHeapStatistics } = require("v8"); // another helper module

  const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
  console.log(dirUploads);

  // util.log(path.basename(__filename)); // NB! deprecated!, adds timestamps
  log(path.basename(__filename)); // NB! deprecated!, adds timestamps
  log(" ^ the name of the current file "); // NB! deprecated!
  log(getHeapStatistics()); // shows the current memory usage
}

function main_readline() {
  const readline = require("readline"); // used for ollecting information from the user

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // rl.question("how do you like Node? ", answer => { // gets two params, input string + a callback function
  //   console.log(`Your answer: ${answer}`);
  // });

  const questions = [
    "what is your name?",
    "Where do you live?",
    "What are you going to do with Node.js",
  ];

  const collectAnswers = (questions, done) => {
    const answers = [];
    const [ firstQuestion ] = questions;

    const questionAnswered = (answer) => {
      answers.push(answer);
      if (answers.length < questions.length) {
        rl.question(questions[answers.length], questionAnswered);
      } else {
        done(answers);
      }
    }

    rl.question(firstQuestion, questionAnswered);
    // done(answers);
  };

  collectAnswers(questions, answers => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
  });
}

function main_modules() {
  // const counter = require("./03-my-module"); // it will export the values form my-module
  const {
    inc,
    dec,
    getCount,
    collectAnswers,
  } = require("./03-my-module"); // we can just destructure the object of export

  inc();
  inc();
  inc(); // Here we use imported methods
  dec();
  console.log(getCount());

  collectAnswers([
    "what is your name? ",
    "Where do you live? ",
    "What are you going to do with Node.js ",
  ], answers => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
  });
}

function main_events() {
  const events = require("events");

  const emitter = new events.EventEmitter();

  emitter.on("customEvent", (message, user) => {
    // we can handle and emit events from any part of our code
    // That is how we can create custom events
    // Arcadii -> it can be very useful, if you are careful
    console.log(`${user}: ${message}`);
  });

  emitter.emit(
    "customEvent", // the name of the event
    "Hello world", // aparamaters of the event, which data would it pass
    "Computer"
  );
  emitter.emit(
    "customEvent",
    "That's pretty cool, huh?",
    "Alex"
  );


  process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
      emitter.emit("customEvent", "Goodbye!", "process");
      process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
  });
}
