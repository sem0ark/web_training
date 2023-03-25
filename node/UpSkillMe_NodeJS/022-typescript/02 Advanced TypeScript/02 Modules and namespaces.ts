// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-18

namespace TodoApp.Model {
  // we also need to specify what we are showing on the level of namespaces

  // we can also nest namespaces

  // here is the example of a namespace
  //   here we can specify all the types and data we want and also provide selective
  //     access to the parts of code defined here

  export interface Todo {
    // to use the code in other parts of the code we have to explicitly specify
    //   the `export` keyword which tells that we provide the access to it from other parts of code
    id: number;
    name: string;
    state: TodoState;
  }

  enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace DataAccess {
  // we can define multiple namespaces in the same file

  // we can also use the `import` keyword, which work like python's import .. as ...
  import Todo = TodoApp.Model.Todo;
  // to avoid too long code, we should use that approach
  //   if the name would be used in multiple places in the code

  interface ITodoService {
    add(todo: TodoApp.Model.Todo): TodoApp.Model.Todo;
    delete(todoId: number): void;
    getAll(): TodoApp.Model.Todo[];
    getById(todoId: number): TodoApp.Model.Todo;
  }
}

(() => {
  // because the IT sphere started to JS seriously only recently,
  //    there was a problem with using the global namespace to solve all the problems
  // Global namespace == BAD!
  //    it encourages implicit sharing between components
  //    it is difficult to determine component boundaries
  //    it is difficult to determine component dependencies
  // Solution -> modules
  //    encourage more explicit dependencies
  //    produces clearer component boundaries
  //  didn't exists before to ECMAScript 2015
  //    tried to solve something with custom patterns
  //      module pattern / revealing module pattern
  //      namespaces
  //      modules and module loaders
  // the TS compiler uses *IIFE* (immediately invoked function expression)
  //  pattern from JS which is stated as:
  //  create a function which is created only to be ran once as a code
  //  it creates a custom scope where we can create private data and other stuff
  //  also that function can get an object to modify it and add to it public data and methods
})();
