// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

let todo2: { name: string }; // we don't name an interface, but just show the object structure
// we can use anonymous type declarations to specify the behavior of the variables
// so it wouldn't be changed to another type

// todo2 = { age: 2 }; // error

function totalLength5(x: { length: number }, y: { length: number }): number {
  return x.length + y.length;
}
