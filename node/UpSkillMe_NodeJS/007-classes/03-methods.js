
/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.15
 * 
 * Methods in class:
 * 1. static - used only by the class itself, usually for utility functions
 * 2. prototype methods
 *    - methods inherited from prototype object
 *    - we can use them with our class
 *    - we can check them in, for example, in browser console
 * 3.:: There are private (#) and protected methods, but they are still partially supported...
 * 
 * Further reading:
 * 1. Pivate and protected methods: https://javascript.info/private-protected-properties-methods
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

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

const cx5 = new Car(4, 'V6', 'grey');
const civic = new Car(3, 'V4', 'blue');

console.log(cx5);
// console.log(cx5.carStats());
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5, civic));

// console.log(cx5.color.toString());