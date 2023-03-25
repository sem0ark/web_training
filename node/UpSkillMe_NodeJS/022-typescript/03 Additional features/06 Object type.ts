// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

(() => {
  // object type
  const warriors: object = {}; // we can now specify teh type object in TS
  console.log(typeof warriors);

  // new.target
  class Warrior {
    constructor() {
      console.log(new.target); // returns the function of the constructor
    }
  }

  const war1 = new Warrior();
})();
