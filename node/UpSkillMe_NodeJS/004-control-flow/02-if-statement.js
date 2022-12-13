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

  // compression of if statements
  let cherub = "Cupid";
  if (cherub === "Cupid") console.log("Watch out an arrow.");
  
  let thruth = true;
  if (thruth) console.log("It's true");

  // Ternary operator
  // mostly used with variable initialization
  // condition ? true_action : false_action

  let animal = "cat";
  // let animal = "dog";

  animal === "cat"
    ? "It is true statement"
    : "It is false statement";

  let job = (animal==="cat") ? "cat herder" : "dog catcher";
})();
