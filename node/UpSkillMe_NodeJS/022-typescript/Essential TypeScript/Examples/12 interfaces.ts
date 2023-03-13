// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-13

(() => {
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

  interface ITodoService {
    // Here we've specified a service as an object with some methods
    add(todo: Todo): Todo;
    delete(todoId: number): void; // void - doesn't return anything
    getAll(): Todo[];
    getById(todoId: number): Todo;
  }

  interface IIdGenerator {
    nextId: number;
  }

  class TodoService implements ITodoService, IIdGenerator {
    // to check if the code corresponds to the interface
    // we don't really need to do anything
    // because as its nature JS uses duck typing, so TS would just check
    //   if the object being used corresponds to the interface
    //   we can specify it by using type specification

    private static _lastId: number = 0;
    // we define the private static variable, also highligh that with `_`

    get nextId(): number {
      return TodoService.getNextId();
    }

    set nextId(nextId: number) {
      TodoService._lastId = nextId - 1;
    }

    constructor(private todos: Todo[]) {}
    // we use the access specifiers to quickly create a variable

    add(todo: Todo): Todo {
      todo.id = TodoService.getNextId();
      // we run the static method by accessing to it through the class

      this.todos.push(todo);
      return todo;
    }

    getAll() {
      let clone = JSON.stringify(this.todos);
      return JSON.parse(clone); // so we don't give access to the inner data
    }

    static getNextId() {
      // we define the static method, so it would be attached to the class itself
      return (TodoService._lastId += 1);
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
})();
