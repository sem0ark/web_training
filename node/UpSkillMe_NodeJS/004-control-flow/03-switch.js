/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.13
 * 
 * Switch statements
 * They work mostly as if staements, but be careful with *break*
 * Switch is not that supported, but it's useful when it comes to a lot of branching
 * 
 * 
 * */

(() => {
  answer = window.prompt("Y/N/M");
  switch (answer) {
    case "Y":
      console.log("Yes");
      break;
    case "N":
      console.log("No");
      break;
    case "M":
      console.log("Maybe");
      break;
    default:
      console.log("Something else");
      break;
  }
})();
