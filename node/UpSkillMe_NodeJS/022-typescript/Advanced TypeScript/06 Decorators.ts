// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-22

// reading Decorators -> https://www.typescriptlang.org/docs/handbook/decorators.html

// We can implement the decorator design pattern to change the behavior of methods and classes
// NB! syntax for decorators is still only ECMA proposal, which is not fully supported,
// so we need to add the flag `experimentalDecorators: true` to use them.

export interface Todo {
  id: number;
  name: string;
  state: TodoState;
}

export enum TodoState {
  Active = 1,
  Complete = 2,
}

export interface ITodoService {
  add(todo: Todo): Todo;
  add(todo: string): Todo;
  clearCompleted(): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;
  toggle(todoId: number): void;
}

let _lastId = 0;

function generateTodoId(): number {
  return (_lastId += 1);
}

function clone<T>(src: T): T {
  var clone = JSON.stringify(src);
  return JSON.parse(clone);
}

export default class TodoService implements ITodoService {
  private todos: Todo[] = [];

  constructor(todos: string[]) {
    if (todos) {
      todos.forEach((todo) => this.add(todo));
    }
  }

  // Accepts a todo name or todo object
  add(todo: Todo): Todo;
  add(todo: string): Todo;

  @log // applying the method decorator to the method
  add(input): Todo {
    var todo: Todo = {
      id: generateTodoId(),
      name: null,
      state: TodoState.Active,
    };

    if (typeof input === "string") {
      todo.name = input;
    } else if (typeof input.name === "string") {
      todo.name = input.name;
    } else {
      throw "Invalid Todo name!";
    }

    this.todos.push(todo);

    return todo;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((x) => x.state == TodoState.Active);
  }

  getAll(): Todo[] {
    return clone(this.todos);
  }

  getById(todoId: number): Todo {
    var todo = this._find(todoId);
    return clone(todo);
  }

  toggle(todoId: number): void {
    var todo = this._find(todoId);

    if (!todo) return;

    switch (todo.state) {
      case TodoState.Active:
        todo.state = TodoState.Complete;
        break;

      case TodoState.Complete:
        todo.state = TodoState.Active;
        break;
    }
  }

  private _find(todoId: number): Todo {
    var filtered = this.todos.filter((x) => x.id == todoId);

    if (filtered.length) {
      return filtered[0];
    }

    return null;
  }
}

// Example of decorator pattern, implemented in JS style,
// we manually added some functionality to the method

// var originalMethod = TodoService.prototype.add;
// TodoService.prototype.add = function (...args) {
//   console.log(`add(${JSON.stringify(args)})`);
//   let returnValue = originalMethod.apply(this, args);
//   console.log(`add(${JSON.stringify(args)}) => ${JSON.stringify(returnValue)}`);
//   return returnValue;
// };

function log(
  target: Object,
  methodName: String,
  descriptor: TypedPropertyDescriptor<Function>
) {
  // target - object the member lives on
  // methodName - name of the method to be decorated
  // descriptor - has a handful of useful properties to use

  let originalMethod = descriptor.value; // .value - the original method itself
  descriptor.value = function (...args) {
    console.log(`${methodName}(${JSON.stringify(args)})`);
    let returnValue = originalMethod.apply(this, args);
    console.log(
      `${methodName}(${JSON.stringify(args)}) => ${JSON.stringify(returnValue)}`
    );
    return returnValue;
  };
}
