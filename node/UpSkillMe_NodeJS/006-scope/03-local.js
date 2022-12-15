/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Local values can be accessed fromonly a specific place where they are defined.
 * 
 * */

const swr = () => {
  var warrior1 = 'Ninja';  // warrior1 and warrior2 are local values,
  let warrior2 = 'Samurai';// so we can't access them from the outside we can redafine the same variables in other functions

  return `Our warriors are ${warrior1} and ${warrior2}`;
}

const swr2 = () => {
  var warrior1 = 'Solider';
  let warrior2 = 'Viking';

  return `Our warriors are ${warrior1} and ${warrior2}`;
}

console.log(swr());
console.log(swr2());

const test_1 = 10;

const challenge = () => {
  let test_2 = 20;
  return test_2 * test_1;
}

console.log(challenge());
// console.log(test_1 * test_2); // doesn't work

