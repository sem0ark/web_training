/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Classe in JS are:
 * 1. Syntactic sugar over prototypes
 * 2. Class changes get passed down by inheritance even dynamically.
 * 3. There is no hoisting with classes compared to the variables
 *    
 * 
 * Classes are defined with:
 * 1. class declaration
 * 2. class expression (rarely used)
 * 
 * Differences between functions and classes:
 * 1. functions are hoisted
 * 2. functions can be overwritten
 * 
 * Blueprint and still need functions -> use classes
 * If you need brand new function without methods -> use functions
 * 
 * Further reading:
 * 1. Class syntax  https://javascript.info/class
 * 
 * */

// Examples of definitions:
var Car_exp = class {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class Car_dec {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color}`
  }
}

// ======================================================

// const cx5 = new Car(4, 'V6', 'grey'); // this would create an error
// with functions and variables you can you them anywhere, but we should be careful with classes

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() { // here we use a shorter version of function declaration
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color}!`
  }
}

// const cx5 = new Car(4, 'V6', 'grey'); // instancing of a class

// console.log(cx5);
// console.log(cx5.carStats());
