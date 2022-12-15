/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Block can be accessed only within the block they where they were defined!
 * Ex: the variable is accessible only within an if-block, because it was declared here.
 * 
 * Block variables are declared with let and const:
 * 1. let declares mutable variables
 * 2. const - immutable variables, so you can't reassign values to them
 * 
 * */

var platforms = 45;

const platoon = () => {
  let perPlatoon = 60;
  console.log(platforms * perPlatoon); 
}
// platoon()

let wr1 = "Ninja";
const wr2 = "Viking";

console.log(wr1, wr2);

// this will return an error!
// wr2 = "Samurai";

wr1 = "Samurai";
console.log(wr1, wr2);

const swr = () => {
  if (wr2 === "Viking") {
    let wr3 = 'Infantry Solider'; // It is within the if-statement!
    console.log(`Our army consists of ${wr1}, ${wr2} and ${wr3}!`);
  }

  // console.log(wr3); // Throws an error
}
swr()

// console.log(wr3); // Throws an error
