// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

// javascript class notation is just a syntactic sugar for prototypal inheritance

// Prototype - the object that has some properties of another object inheriting from it
//  so we don't need to keep the definition of methods in every object of some class
//  but use predefined methods for every object in that class

// If you access some property of the object:
//    1 - JS checks if it is in object
//    2 - else JS checks if it is in object's prototype
//    3 - else JS checks if it is in object's prototype's prototype
//    4 - ...

(() => {
  interface Todo {
    name: string;
    completed?: boolean;
  }

  function TodoServiceJS() {
    // it is basically a constructor
    this.todos = []; // this keyword specifies the pointer to the object
  }

  TodoServiceJS.prototype.getAll = function () {
    // it is a prototype definition
    // so we could use that method in every object
    return this.todos;
  };

  let service = new TodoServiceJS();
  // with new keyword we specify that this keyword should now point on the constructor function
  service.getAll();

  // now how it looks as in TS

  class TodoServiceTS {
    // todos: Todo[] = []; // specifying the property and the initial value
    // todos2: Todo[];
    // constructor(todos2: Todo[]) {
    //   this.todos = [];
    //   this.todos2 = todos2; // adding a changing property
    // }

    // Adding the changing property can be compressed into
    constructor(private todos: Todo[]) {
      // here we've added an access modifier to the property
      // it would work in the same way as before
    }

    getAll() {
      return this.todos;
    }
  }
})();
