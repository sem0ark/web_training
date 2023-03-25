// import Model = require("./02 Modules and namespaces"); // example of require syntax
// import Todo = Model.Todo;

import { Todo } from "./03 01 model";

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
  add(todo: Todo): Todo {
    todo.id = getNextId();
    this.todos.push(todo);
    return todo;
  }

  getAll() {
    let clone = JSON.stringify(this.todos);
    return JSON.parse(clone);
  }

  getById(todoId: number): Todo {
    let found = this.todos.filter((e) => e.id === todoId);

    if (found.length) return found[0];
    return null; // we can return null as a object
  }

  delete(todoId: number): void {
    this.todos = this.todos.filter((e) => e.id !== todoId); // also use filter
  }
}
