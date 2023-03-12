// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

// Continuing the previous file...
// In reality it doesn't make sense to add .length of two different types

// We want to specify two different functions for handling two strings or two arrays
// We can't use overloading as it is working in Java or C#, so we can specify only ONE function

function totalLength4(x: string, y: string): number;
function totalLength4(x: any[], y: any[]): number;
function totalLength4(x: any[] | string, y: any[] | string): number {
  // here we define the implementation
  // NB! it wouldn't be visible in other code
  //     we would see only the overloaded function definitions -> for two arrays, for two strings

  let total: number = x.length + y.length;

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
