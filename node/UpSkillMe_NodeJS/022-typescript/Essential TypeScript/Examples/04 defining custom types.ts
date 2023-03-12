// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

// we can use interfaces to define the requested data of objects
// interfaces are used only for in TS and static analysis of code
interface Todo {
  // we would use it to describe the todo type
  name: string;
  completed: boolean;
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
