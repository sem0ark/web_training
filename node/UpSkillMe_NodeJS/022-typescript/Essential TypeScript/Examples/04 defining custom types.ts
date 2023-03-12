// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

(() => {
  // we can use interfaces to define the requested data of objects
  // interfaces are used only for in TS and static analysis of code
  interface Todo {
    // we would use it to describe the todo type
    name: string;
    completed?: boolean;
    description?: string; // specifies the optional parameters
  }

  // upon any changes from 3rd party structures, we would be able quicker fix the issue
  // by using interfaces

  interface ITodoService {
    // Here we've specified a service as an object with some methods
    add(todo: Todo): Todo;
    delete(todoId: number): void; // void - doesn't return anything
    getAll(): Todo[];
    getById(todoId: number): Todo;
  }

  // let todo: Todo = {}; // error
  // let todo: Todo = {name: 123, completed: false}; // error
  let todo: Todo = {
    name: "Pick up drycleaning",
    completed: false,
  };

  // Making interfaces for functions
  // because in JS we usually use functions

  interface jQuery {
    (selector: string | any): jQueryElement; // the form of the lambda function
    version: number;
    fn: any; // Here we are also looking on the pattern from jQuery library
    // we can add properties to fn element to extend the functionality
    // of the standard definition
  }

  // Extending interfaces
  interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
  }

  interface jQueryElement {
    // we don't conflict to with the first interface
    // any additional definitions would be added to the already defined interface
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
  }
  // Use this approach ONLY with the code you don't own to add some custom functionality

  let $ = <jQuery>function (selector) {
    // Here we are using type casting, so we force the type of the data we use
    // Find DOM element
  };

  $.fn.todo = function (todo?: Todo): Todo {
    if (todo) {
      $(this).data("todo", todo);
    } else {
      return $(this).data("todo");
    }
  };

  $.version = 1.12;
  let container = $("#container");
  container.data("todo", todo);
  let savedTodo = container.data("todo");

  container.todo(todo);
})();
