// import Model = require("./02 Modules and namespaces"); // example of require syntax
// import Todo = Model.Todo;

import { Todo } from "./03 01 model.ts";

let _lastId: number = 0;

function getNextId(): number {
  return (_lastId += 1);
}

export interface ITodoService {
  add(todo: Todo): Todo;
  delete(todoId: number): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;
}

export class TodoService implements ITodoService {
  constructor(private todos: Todo[]) {}
  // we use the access specifiers to quickly create a variable

  add(todo: Todo): Todo {
    todo.id = getNextId();
    // we run the static method by accessing to it through the class

    this.todos.push(todo);
    return todo;
  }

  getAll() {
    let clone = JSON.stringify(this.todos);
    return JSON.parse(clone); // so we don't give access to the inner data
  }

  getById(todoId: number): Todo {
    let found = this.todos.filter((e) => e.id === todoId); // here we use some ES6 functionality

    if (found.length) return found[0];
    return null; // we can return null as a object
  }

  delete(todoId: number): void {
    this.todos = this.todos.filter((e) => e.id !== todoId); // also use filter
  }
}
