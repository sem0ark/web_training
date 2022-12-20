/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * 1. Map - disctionary in JS.
 *    It is a complex data type, that contains key-value pairs of any type.
 *    We can change values with 'set' method and get them with 'get'.
 *    It stores elements in the order in insertion.
 *    When to use:
 *      1) if you want to use something other then a string as a key.
 *      2) if you want to preserve teh order of elements.
 * 
 * 2. Set - colletion of values of any type, but unique. We can access it, add/delete elements or check if the elelment is in the set.
 *        When to use:
 *          1) When you need to keep track fo the unique values.
 *          2) Whwn you need to protect from repetiotions.
 * 3. Symbols - unique ID's that don't conflict with strings or objects.
 *    When to use :
 *      1) to avoid naming conflicts
 *      2) create unqiue identifier
 * 
 * Further reading:
 * 1. Exponent operator: https://exploringjs.com/es2016-es2017/ch_exponentiation-operator.html
 * 2. Tempate literals: https://exploringjs.com/es6/ch_template-literals.html
 * 3. The spread operator: https://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator
 * 4. Generators: https://exploringjs.com/es6/ch_generators.html
 * 5. New string features: https://exploringjs.com/es6/ch_strings.html
 * 6. Basic ES6 modules: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 *  
 * Addttional for review:
 * 1. Variables and scope:  https://exploringjs.com/es6/ch_variables.html
 * 2. Itarables and iterators: https://exploringjs.com/es6/ch_iteration.html
 * 3. Chaining and method calls: https://exploringjs.com/impatient-js/ch_single-objects.html#optional-chaining
 * 4. New number and number features: https://exploringjs.com/es6/ch_numbers.html
 * 5. Bigints: https://exploringjs.com/impatient-js/ch_bigints.html
 * 6. New string methods: https://exploringjs.com/es2016-es2017/ch_string-padding.html
 * 7. String.prototype.{trimStart,trimEnd}: https://exploringjs.com/es2018-es2019/ch_array-prototype-trimstart-trimend.html
 * */

function main_map() {
  let course = new Map();

  course.set("react", { description: "ui" });
  course.set("jest", { description: "testing" });

  console.log(course);

  console.log(course.react); // we can't access through dot notation
  console.log(course.get("react"));
  console.log(course.get("jest"));

  let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1, 2]],
  ]
);

  console.log(`There are ${details.size} entries in details`);

  details.forEach((item) => { // we can use forEach sunctionality
    console.log(item);
  });
}

function main_set() {
  let books = new Set();
  books.add("Pride and Prejustice");
  books.add("War and Peace")
       .add("War and Peace")
       .add("Oliver Twist"); // we can chain actions
  
  console.log(`there are ${books.size} books in the 'books' set`);
  // we can check the number of entries with 'size'
  
  console.log(books);

  console.log(`Has Oliver Twist: ${books.has("Oliver Twist")}`);
  // we can check if the item is in the set with 'has'

  books.delete("Oliver Twist"); // deletion of the element

  books.forEach((item) => {
    console.log(item);
  });
}

function main_symbols() {
  const id = Symbol(); // we create a symbols with factory function
  const courseInfo = {
    title: "JavaScript",
    topics: ["string", "arrays", "objects"],
    id: "js-course",
  };

  courseInfo[id] = 41284;
  console.log(courseInfo); // there is no 
}

main_map();
main_set();
main_symbols();