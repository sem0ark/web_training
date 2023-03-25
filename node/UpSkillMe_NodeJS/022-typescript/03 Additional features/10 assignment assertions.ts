// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

(() => {
  let num!: number; // use !: to suppress that error

  apply();

  console.log(num);
  // would be an error, because we `apply` would work only after logging

  function apply() {
    num = 210;
  }
})();
