// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-13

(() => {
  interface Todo {
    name: string;
    state: TodoState;
  }

  enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }

  // we have 3 access modifiers as in Java:
  // private - only methods, defined only in the same class would be able to access it
  // protected - only methods, defined only in the same class or inherited ones would be able to access it
  // public - any method can access it - it is also a default access modifier

  // NB! using private and protected members wouldn't actually stop JS from accessing them, because
  //      it doesn't have them, but there are standard conventions to use for that purpose:
  //      private -> _variableName
  //      protected -> #variableName

  abstract class TodoStateChanger {
    constructor(protected newState: TodoState) {}
    // define protected so we could access it in inheriting classes

    abstract canChangeState(todo: Todo): boolean;
    // here is an abstract method, we must to implement it in inherited classes

    changeState(todo: Todo): Todo {
      if (this.canChangeState(todo)) {
        todo.state = this.newState;
      }

      return todo;
    }
  }

  class CompleteTodoStateChanger extends TodoStateChanger {
    // here is everything we need to inherit the class
    // NB! also we don't need to implement the constructor, it is also inherited

    constructor() {
      // if we've implemented the constructor
      super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
      // we can also use super to access the base class methods
      return (
        !!todo &&
        (todo.state == TodoState.Active || todo.state == TodoState.Deleted)
      );
    }
  }

  class SmartTodo {
    constructor(public name: string) {}
    // here we define the standard public access modifier
  }

  class TodoService {
    private static _lastId: number = 0;
    // we define the private static variable, also highligh that with `_`

    private get nextId(): number {
      return TodoService.getNextId();
    }

    private set nextId(nextId: number) {
      TodoService._lastId = nextId - 1;
    }

    constructor(private todos: Todo[]) {}
    // we use the access specifiers to quickly create a variable

    add(todo: Todo) {
      let newId = TodoService.getNextId();
      // we run the static method by accessing to it through the class

      this.todos.push(todo);
    }

    getAll() {
      return this.todos;
    }

    static getNextId() {
      // we define the static method, so it would be attached to the class itself
      return (TodoService._lastId += 1);
    }
  }
})();
