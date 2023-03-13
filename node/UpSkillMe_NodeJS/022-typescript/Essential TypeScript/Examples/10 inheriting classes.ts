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

  // In the previous examples we've got some functionality logic
  //  for the one of the states, but what is there are many of them?

  // We cna implement a design patters called state machine to simplify the behavior of the
  //  system.

  abstract class TodoStateChanger {
    // Here we define an abstract class to inherit but not use, works in the same way as Java
    // a base class for the structure
    constructor(private newState: TodoState) {}

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
})();
