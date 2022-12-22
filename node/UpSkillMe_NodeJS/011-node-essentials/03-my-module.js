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
};


module.exports = { // like this we can export an object of any type.
  name: "Alex",
  inc,
  dec,
  getCount,
  collectAnswers,
};
