// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12
function totalLength4(x, y) {
  // here we define the implementation
  // NB! it wouldn't be visible in other code
  //     we would see only the overloaded function definitions -> for two arrays, for two strings
  var total = x.length + y.length;
  if (x instanceof Array) {
    // using type guard syntax
    // now TS understands that x here is an array
    x.push("abc"); // would work here
  }
  if (typeof x === "string") {
    // can also use (x instanceof String)
    x.substring(1);
  }
  return total;
}
// totalLength4("12", "43"); // works
// totalLength4([123], [23]);// works
// totalLength4("12", [232]);// doesn't work!!
