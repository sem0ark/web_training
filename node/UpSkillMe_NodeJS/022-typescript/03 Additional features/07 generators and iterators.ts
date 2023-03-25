// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

(() => {
  let arr = ["arr - a", "arr - b", "arr - c"];

  let obj = {
    a: "obj - 1",
    b: "obj - 2",
    c: "obj - 3",
  };

  for (let value of arr) {
    // iterate through the values
    console.log(value);
  }

  for (let propertyName in arr) {
    // iterate through the keys of the object or array
    console.log(propertyName);
  }

  for (let propertyName in obj) {
    // iterate through the keys of the object or array
    console.log(propertyName);
  }

  function* generatorFunction() {
    yield "iter - a";
    yield "iter - b";
    yield "iter - c";
    yield "iter - d";
  }

  for (let value of generatorFunction()) {
    // use --downlevelIteration flag to run
    console.log(value);
  }
})();
