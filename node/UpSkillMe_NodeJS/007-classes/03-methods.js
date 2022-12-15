
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

