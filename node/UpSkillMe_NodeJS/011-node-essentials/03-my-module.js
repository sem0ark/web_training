/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.21
 * 
 * We can use module.exports to export any functionality form the file.
 * */

let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;


const readline = require("readline"); // used for ollecting information from the user

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const collectAnswers = (questions, done=x=>x) => { // here  we created the default function for "done" paramenter
  const { EventEmitter } = require('events');

  const answers = [];
  const [ firstQuestion ] = questions;

  const emitter = new EventEmitter();

  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      emitter.emit("complete", answers);
      done(answers);
    }
  }

  rl.question(firstQuestion, questionAnswered);

  return emitter;
};


module.exports = { // like this we can export an object of any type.
  name: "Alex",
  inc,
  dec,
  getCount,
  collectAnswers,
};
