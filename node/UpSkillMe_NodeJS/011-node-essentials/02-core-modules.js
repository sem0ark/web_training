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
 * 
 * */

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

main_readline();

