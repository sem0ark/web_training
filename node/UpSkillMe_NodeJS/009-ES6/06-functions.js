/**
 * Notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * Completed by Arkadii Semenov on 2022.12.20
 * 
 * Defaul parameters: we can add the default values to the params of the functions
 * 
 * Arrow functions:
 *    It is a shorthand for unnamed functions, which is widely used with ES6.
 *    In addition arrow functions help us managed with "this" statement.
 * 
 * 
 * Further reading:
 * 1. Parameter Handling: https://exploringjs.com/es6/ch_parameter-handling.html
 * 2. Arrow Functions: https://exploringjs.com/es6/ch_arrow-functions.html
 * */

function main_default() {
  function add(x=5, y=6) { console.log(x + y); } // an example of default params
  add(1, 2);
  add();
  add(4);

  function haveFun(activityName="hiking", time=3) {
    console.log(`Today I will go ${activityName} for ${time} hours`);
  }
  haveFun("biking", 2.5);
  haveFun("biking");
  haveFun();
}

function main_arrow() {
  let studentList = (student) => console.log(student);
  studentList(["A", "B", "C"]);

  let list = ["apple", "banana", "cherry"];
  list.map((item) => console.log(item));
  // arrow functions is a great way to make the code more readable and compact

  let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function() {
      // let _this = this;
      this.hobbies.forEach((hobby) => {
        // Here "this" doesn't work and points to the inner function 
        // Arrow function doesn't have its own scope, so "this" works with it.
        console.log(`${this.first} likes to ${hobby}`);
      })
    }
  }
  person.printHobbies();
}

function main_generators() {
  function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
  }

  let countdown = director();

  console.log(countdown.next()); // By calling the .next() we retrieve values from th egenerator.
  console.log(countdown.next());
  console.log(countdown.next());
  console.log(countdown.next());
  console.log(countdown.next());
}

main_generators();
