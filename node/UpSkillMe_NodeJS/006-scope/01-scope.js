/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.14
 * 
 * Scope in JS:
 * 1. scope determines availability of the variable from some place.
 * 2. var is rarely used, let and const - block scope
 * 3. There are 3 types:
 *    1. Local  -> only available locally to a function.
 *    2. Global -> available to all.
 *    3. Block (declared with let and const) -> accessable in th eblock they surrounded by.
 * 
 * Closures -> inner function with the access to the external variables.
 * Hoisting -> JS's behaviour of moving declarations to the top of their scope.
 * 
 * Further reading:
 * 1. Variable scope, closure: https://javascript.info/closure
 * 2. The old "var": https://javascript.info/var
 * 
 * */

warrior = "Ninja"; // warrior is defined here
warrior3 = "Viking";

const wr = () => {
  let warrior2 = "Samurai";

  // wrap in a function now is a closure
  return {
    shootWarrior: () => {
      console.log(warrior, warrior2); // There we have acces to warrior and warrior2
    }
  }
}

// wr();
// console.log(warrior, warrior2);

const newWarrior = wr();
newWarrior.shootWarrior()

console.log(warrior, warrior3);

var warrior; // warrior is declared here...

var warrior3; // will show undefined
