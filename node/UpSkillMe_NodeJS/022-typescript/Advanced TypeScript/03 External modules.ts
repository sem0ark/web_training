// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-18

// *External modules* is a different way to do the same thing - encapsulate and manage data access
//    in *implicit modules* approach we used namespaces to create a scope for data and control it
//    but in external modules we use file scope as our base

// Internal VS External

// - Both encourage encapsulation and organization
// - Both require components to be exported
// - Both require components to be imported

// -> Internal -> namespace - function scope
// -> Internal -> - file scope

// import syntaxes: -> they are equivalent
// require (like node.js)
// ECMAScript 2015 standard -> recommended

interface Todo {
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
