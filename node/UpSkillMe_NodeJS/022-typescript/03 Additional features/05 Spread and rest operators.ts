// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-25

// - [Basics of Mapped Types](https://www.domysee.com/blogposts/ts-mapped-types)
// - [Mapped Type examples](https://medium.com/javascript-everyday/mapped-types-in-typescript-6be8a0dd532c)
// - [Recommended: TS Mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

// We can use mapped types as list comprehensions in Python,
//    where we can more quickly create new types
// Overall, we can use these mapped types in the same way
//    as objects or comprehensions in Python to quickly create some types and restrictions to them

(() => {
  let obj = {
    // object with some properties
    a: 123,
    b: 456,
    c: 789,
  };

  let obj2 = {
    // object with some properties
    c: 123,
    d: 456,
    e: 789,
  };

  console.log(obj);

  let { a, ...obj_without_a } = obj;
  // here we use the rest operator to group all ~a properties to another object

  let merged_obj = { ...obj, ...obj2 };
  // {
  //   a: 123,
  //   b: 456,
  //   c: 123,
  //   d: 456,
  //   e: 789,
  // };

  // updates values from left to right + adding new properties
  // that is how we can merge different objects into a new one
})();
