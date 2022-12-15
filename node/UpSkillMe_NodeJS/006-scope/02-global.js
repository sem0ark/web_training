"use strict";

/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.14
 * 
 * Global vaulues:
 * 
 * 
 * Further reading:
 * 1. Global: https://javascript.info/global-object
 * 2. It is not recommended to use global variable
 * 3. If you don't declare a variable in the function, it will auomatically become global one.
 * 4. Use "use strict;" to prevent this feature!
 * */

const warrior = {
  name: "Justin",
  type: "Ninja",
  weapon: "Shuriken",
  agility: 79,
}; // This is globally scoped

const warriors = [
  warrior,
];

const wr = () => {
  let warrior2 = "Samurai";

  warrior3 = "Viking"; // the variable wasn't declared, so it can became global
  return {
    shootWarrior: () => {
      console.log(warrior, warrior2); // There we have acces to warrior and warrior2
    }
  }
}

const newWarrior = wr();
newWarrior.shootWarrior()

console.log(warrior, warrior3);

let warrior3 = "Viking";