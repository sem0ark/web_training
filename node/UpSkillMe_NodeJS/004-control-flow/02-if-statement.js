/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.12
 * */

(() => {
  let answer = window.confirm("Click OK for truth.");
  if (answer) {
    console.log("You said truth.");
  } else {
    console.log("Something else.");
  }

  answer = window.prompt("Y/N/M");
  if (answer === "Y") {
    console.log("Yes");
  } else if (answer === "N") {
    console.log("No");
  } else if (answer === "M") {
    console.log("Maybe");
  } else {
    console.log("Something else");
  }
})();
