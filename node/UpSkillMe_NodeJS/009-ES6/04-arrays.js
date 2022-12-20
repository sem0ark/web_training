/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * Spread operator:
 *      look into 03-additional.js
 * 
 * Destructuring the array:
 *      Getting data from the array by mapping to the variables.
 * 
 * Searching in the array:
 *      .includes(element) - does the array has the element
 * 
 * Further reading:
 * 1. New Array Features: https://exploringjs.com/es6/ch_arrays.html
 * 2. Destructuring: https://exploringjs.com/es6/ch_destructuring.html
 * 3. The for-of loop: https://exploringjs.com/es6/ch_for-of.html
 * 4. Array.prototype.includes: https://exploringjs.com/es2016-es2017/ch_array-prototype-includes.html
 * 5. Array.prototype.{flat,flatMap}: https://exploringjs.com/es2018-es2019/ch_array-prototype-flat-flatmap.html
 * 
 * */

let cities = [
  'Test1',
  'Moscow',
  'Las Vegas',
  'New York',
];

let [first ,,,,fifth] = cities;

console.log(first);
console.log(fifth);

console.log("Moscow is in the cities: ", cities.includes('Moscow'));
