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
    let todo: ValidatableTodo = new ValidatableTodo();
    todo.id = generateTodoId();
    todo.name = null;
    todo.state = TodoState.Active;

    if (typeof input === "string") {
      todo.name = input;
    } else if (typeof input.name === "string") {
      todo.name = input.name;
    } else {
      throw "Invalid Todo name!";
    }

    let errors = todo.validate();

    if (errors.length) {
      let combinedErrors = errors.map((x) => `${x.property} : ${x.message}`);
      throw `Invalid Todo: ${combinedErrors}`;
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

/// --------------------------------------------------------

@validatable // adding the class decorator, which dynamically
export class ValidatableTodo implements Todo {
  id: number;

  @regex(`^[a-zA-Z ]*$`)
  @required
  name: string;
  state: TodoState;
}

export interface IValidatable {
  validate(): IValidationResult[];
}

export interface IValidationResult {
  isValid: boolean;
  message: string;
  property?: string; // ? - may be undefined
}

export interface IValidator {
  (instance: Object): IValidationResult;
}

export interface ValidatableTodo extends IValidatable {}

export function validate(): IValidationResult[] {
  let validators: IValidator[] = [].concat(this._validators);
  let errors: IValidationResult[] = [];

  for (let validator of validators) {
    let result = validator(this);
    if (!result.isValid) {
      errors.push(result);
    }
  }
  return errors;
}

// ValidatableTodo.prototype.validate = validate;

export function validatable(target: Function) {
  target.prototype.validate = validate;
}

/// -----------------------------------------------------

export function required(target: Object, propertyName: string) {
  let validatable = <{ _validators: IValidator[] }>target; // here we specify that target definitely has thr property
  let validators = validatable._validators || (validatable._validators = []);

  validators.push(function (instance): IValidationResult {
    let propertyValue = instance[propertyName];
    let isValid = propertyValue != undefined;

    if (typeof propertyValue === "string") {
      isValid = propertyValue && propertyValue.length > 0;
    }

    return {
      isValid,
      message: `${propertyName} is required`,
      property: propertyName,
    };
  });
}

function regex(pattern: string) {
  let expression = new RegExp(pattern);

  return function regex(target: Object, propertyName: string) {
    let validatable = <{ _validators: IValidator[] }>target; // here we specify that target definitely has thr property
    let validators = validatable._validators || (validatable._validators = []);

    validators.push(function (instance): IValidationResult {
      let propertyValue = instance[propertyName];
      let isValid = expression.test(propertyValue);

      if (typeof propertyValue === "string") {
        isValid = propertyValue && propertyValue.length > 0;
      }

      return {
        isValid,
        message: `${propertyName} does not match ${expression}`,
        property: propertyName,
      };
    });
  };
}

/// The whole idea:
// 1. we need to create the validation to the current functionality
// 2. we still want to use Todo, but avoid adding functionality directly
// 3. we create the class decorator that adds the functionality `validate` to the class
// 4. we add property decorators,  which:
//     1) initialize the _validators array, which would contain all the functions for validation
//     2) define our own function of validation for that specific occurrence
// 5. we want to add a decorator with the custom parameter
//    1) we define factory function, which creates the decorator, which can be applied to the functions
