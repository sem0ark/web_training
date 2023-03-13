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


  class SmartTodo {
    _state: TodoState;

    constructor(public name: string) {
      this._state = TodoState.New;
    }

    get state(): TodoState | undefined {
      // Here we define the getter method for some property for the object
      return this._state;
    }

    set state(newState: TodoState) {
      // Here we define a setter method for some property for the object
      // as you can see we can add more functionality to that methods

      if (
        newState == TodoState.Complete &&
        (this.state == TodoState.Active || this.state == TodoState.Deleted)
      ) {
        throw "Todo must be Active or Deleted in order to be marked as Complete";
      }

      this._state = newState;
    }
  }
})();
