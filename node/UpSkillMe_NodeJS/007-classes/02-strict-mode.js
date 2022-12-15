
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Strict mode:
 * 1. it is enabled in classes as a standard
 * 2. it block programming from using some rather dangerous functioonality in JS
 * 3. it forces JS to throw errors in replace of being adaptive, which enchanses
 * 
 * Possible cuts in functionality:
 * - Octal syntax const n = 023;
 * - with statement
 * - Using delete on a variable name delete myVariable;
 * - Using eval or arguments as variable or function argument name
 * - Using one of the newly reserved keywords (in prevision for future language features): implements, interface, let, package, private, protected, public, static, and yield
 * - Declaring two function parameters with the same name function f(a, b, b) {}
 * - Declaring the same property name twice in an object literal {a: 1, b: 3, a: 7}. This constraint was later removed (bug 1041128).
 * 
 * - Assignment to a non-writable global
 * - Assignment to a non-writable property
 * - Assignment to a getter-only property
 * - Assignment to a new property an a non-extensible object
 * 
 * */

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

// "use strict"; // strict mode is specified with that expresstion
