/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * Spread Operator {...}:
 * 1. Rest operator:
 *      collects the remaining items of an iterable
 *      into an Array and is used for rest parameters and destructuring.
 * 2. Spread operator:
 *      turns the items of an iterable into arguments of a function call
 *      or into elements of an Array
 * 
 * */

function main_spread() {
  console.log(Math.max(...[1, 2, 2, 4, 2], 1, 3, ...[2, 3], 4));

  const arr1 = ['a', 'b'];
  const arr2 = ['c', 'd'];
  arr1.push(...arr2);  // arr1 is now ['a', 'b', 'c', 'd']

  const x = ['a', 'b'];
  const y = ['c'];
  const z = ['d', 'e'];
  const arr = [...x, ...y, ...z]; // ['a', 'b', 'c', 'd', 'e']

  // Spreading into constructors 
  const eve = new Date(...[1912, 11, 24]) // Christmas Eve 1912

  // Your own iterable objects can be converted to Arrays in the same manner:
  const obj = { // for iterators check generators and iterators
      * [Symbol.iterator]() {
          yield 'a';
          yield 'b';
          yield 'c';
      }
  };
  const arr3 = [...obj]; // ['a', 'b', 'c']

  // Note that, just like the for-of loop, the spread operator only works for iterable values.
}

