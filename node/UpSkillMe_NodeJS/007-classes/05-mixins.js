
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Mixins:
 * 1. They are used when you need to iherit from a group of classes
 * 2. We use it as a composition  -> *We compose a new class*
 * 3. They are not recommended to use them
 * 4. Use them with caution
 * 
 * Further reading:
 * 1. Mixins: https://javascript.info/mixins
 * 
 * */

let mixin = {
  madeIn() {
    console.log('It is made in 2019');
  }
}

let carMixin = {
  __proto__: mixin,
  madeIn() {
    super.madeIn();
  }
}

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() { // here we use a shorter version of function declaration
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color}!`
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

class SUV extends Car {
  constructor(doors, engine, color, brand, carStats) {
    super(doors, engine, color, carStats);
    // it creates a new object and pull data from the parent object
    // In super we specify what are we pulling:
    //    three properties
    //    and a function

    this.brand = brand;
    this.wheels = 4;
    this.ac = true;

    // assign a mixin
    Object.assign(this, carMixin);
  }

  myBrand() {
    return `This SUV is a ${this.brand}`;
  }
}

const cx5 = new SUV(4, 'V6', 'grey', 'Mazda');

console.log(cx5);
console.log(cx5.carStats());
console.log(cx5.myBrand());

cx5.madeIn();