
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Constructors:
 * 1. Part of the class syntax
 * 2. There is only one constructor per class
 * 3. In other words it is a function that builds
 *    a new object from the class with some additional properties
 * 4. we can use "super()" to access to the methods of a parent class
 * 
 * Further raeding:
 * 1. inherirtance in JS:  https://javascript.info/class-inheritance
 * */

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  /**
   * 
   * @returns String
   */
  carStats() { // here we use a shorter version of function declaration
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color}!`
  }

  /**
   * 
   * @param {Car} car1 
   * @param {Car} car2 
   * @returns Integer
   */
  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

// Here we use extends operator that works as a mechanism of inheritance
// So the prototype of the class inherits properties from the parent prototype
class SUV extends Car {
  /**
   * 
   * @param {Integer} doors 
   * @param {String} engine 
   * @param {String} color 
   * @param {function} carStats 
   */
  constructor(doors, engine, color, brand, carStats) {
    super(doors, engine, color, carStats);
    // it creates a new object and pull data from the parent object
    // In super we specify what are we pulling:
    //    three properties
    //    and a function

    this.brand = brand;
    this.wheels = 4;
    this.ac = true;
  }

  myBrand() {
    return `This SUV is a ${this.brand}`;
  }
}

const cx5 = new SUV(4, 'V6', 'grey', 'Mazda');

console.log(cx5);
console.log(cx5.carStats());
console.log(cx5.myBrand());
