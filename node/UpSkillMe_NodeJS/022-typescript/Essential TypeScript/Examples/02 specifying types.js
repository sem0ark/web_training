// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12
function totalLength2(x, y) {
  // we can specify the return and input types to keep the function readable and working
  // any[] - array of something
  var total = x.length + y.length;
  return total;
}
function totalLength3(x, // Here we are using the union parameter
  y // so we can specify multiple types as an input
  // because any[] and string both have .length property
  // TS would yell if we use some specific functionality
) {
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
