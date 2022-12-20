/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * ## Spread Operator {...}:
 * 1. Rest operator:
 *      collects the remaining items of an iterable
 *      into an Array and is used for rest parameters and destructuring.
 * 2. Spread operator:
 *      turns the items of an iterable into arguments of a function call
 *      or into elements of an Array
 * 
 * ## Generators
 * You can think of generators as processes
 *    (pieces of code) that you can pause and resume.
 * Generators are functions that can be paused and resumed
 *    (think cooperative multitasking or coroutines),
 *    which enables a variety of applications.
 * 
 * Note the new syntax:
 * 1. function* is a new “keyword” for generator functions (there are also generator methods).
 * 2. yield is an operator with which a generator can pause itself.
 * 3. Additionally, generators can also receive input and send output via yield.
 * 4. The method call .next() continues execution until the next yield.
 * 5. yield*, an operator for making recursive generator calls, does consider values inside done objects
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
    *[Symbol.iterator]() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
  };
  const arr3 = [...obj]; // ['a', 'b', 'c']

  // Note that, just like the for-of loop, the spread operator only works for iterable values.
}

function main_generators() {
  // There are four kinds of generators:

  function* genFunc1() { } // Generator function declarations
  const genObj1 = genFunc1();

  const genFunc2 = function* () { } // Generator function expressions
  const genObj2 = genFunc2();

  const obj = { // Generator method definitions in object literals
    * generatorMethod() { }
  };
  const genObj3 = obj.generatorMethod();

  // Generator method definitions in class definitions
  //    (class declarations or class expressions)
  class MyClass {
    * generatorMethod() { }
  }
  const myInst = new MyClass();
  const genObj4 = myInst.generatorMethod();


  // Use case: implementing iterables
  function* objectEntries(obj) {
    const propKeys = Reflect.ownKeys(obj);
    for (const propKey of propKeys) {
      // `yield` returns a value and then pauses
      // the generator. Later, execution continues
      // where it was previously paused.
      yield [propKey, obj[propKey]];
    }
  }

  const jane = { first: 'Jane', last: 'Doe' };
  for (const [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
  }
  // Output:
  // first: Jane
  // last: Doe

  // Ways of iterating over a generator
  // 1. First, the for-of loop.
  // 2. Second, the spread operator (...).
  // 3. Third, destructuring.


  // Returning
  function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'result';
  }
  // > const genObjWithReturn = genFuncWithReturn();
  // > genObjWithReturn.next()
  // { value: 'a', done: false }
  // > genObjWithReturn.next()
  // { value: 'b', done: false }
  // > genObjWithReturn.next()
  // { value: 'result', done: true }

  // `done` is usually ignored, except yield* 
  function* logReturned(genObj) {
    const result = yield* genObj;
    console.log(result); // (A)
  }
  // > [...logReturned(genFuncWithReturn())]
  // The result
  // [ 'a', 'b' ]


  // Iterating over trees 
  class BinaryTree {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
    /** Prefix iteration */
    *[Symbol.iterator]() {
      yield this.value;
      if (this.left) {
        yield* this.left;
        // Short for: yield* this.left[Symbol.iterator]()
      }
      if (this.right) {
        yield* this.right;
      }
    }
  }

  const tree = new BinaryTree('a', new BinaryTree('b', new BinaryTree('c'), new BinaryTree('d')), new BinaryTree('e'));

  for (const x of tree) {
    console.log(x);
  }

}

main_generators();