// Notes on the course Typescript for Node.js from EPAM UpSkillMe Node.js program
// Completed by Arkadii Semenov on 2023-03-12

(() => {
  enum TodoState {
    // we can use enums to get rid of magic numbers
    // which makes the code much more readable
    New = 1,
    Active,
    Complete,
    Deleted,
  }

  interface Todo {
    name: string;
    // state: number; // we can use numbers to specify the state of the task
    // but it is not really readable

    state: TodoState;
  }

  let todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New,
  };

  function deleteTodo(todo: Todo) {
    if (todo.state != TodoState.Complete) {
      throw "Can't delete incomplete task";
    }
  }
})();
