// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

(() => {
  // to create something like a counter we should use static properties
  //  which attach specifically to the class or constructor function

  // JS

  function TodoServiceJS() {}

  TodoServiceJS.lastId = 0;

  TodoServiceJS.getNextId = function () {
    return (TodoServiceJS.lastId += 1);
  };

  TodoServiceJS.prototype.add = function (todo) {
    let newId = TodoServiceJS.getNextId();
  };

  // TS way

  interface Todo {
    name: string;
  }

  class TodoServiceTS {
    static lastId: number = 0; // we define the static variable

    constructor(private todos: Todo[]) {}
    // we use the access specifiers to quickly create a variable

    add(todo: Todo) {
      let newId = TodoServiceTS.getNextId();
      // we run the static method by accessing to it through the class

      this.todos.push(todo);
    }

    getAll() {
      return this.todos;
    }

    static getNextId() {
      // we define the static method, so it would be attached to the class itself
      return (TodoServiceTS.lastId += 1);
    }
  }
})();
