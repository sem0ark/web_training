Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program
Completed by Arkadii Semenov on 2023-02-19

There are moments some parts of code have dependencies like connections to the DB, etc, but unit tests require isolation, then what should we do?

> _Replacing and inspecting code execution with_:
>
> Test doubles:
>
> 1. Spies
> 2. Stubs
> 3. Mocks

## Replacing code with test doubles

Test double - replacement for a component like a module or method.

- looks and behaves similarly
- provides same API
- simplified version
- can be deterministic -> alway respond in the same way
- typically configured during test setup

Why should we use them?

- replace code to isolate the test target
- consistency
- fast testing

Variations of test doubles: from [xunitpatterns.com](http://xunitpatterns.com/)

1. Test stubs
   - simulates the behavior of the component code by controlling the responses
   - won't respond unless programmed to
   - temporarily replaces real component
   - verifies indirect inputs
   - EX: Faking DB query response or disabling logging
2. Test spies
   - observes interactions with tested code
   - -> number of call to the component
   - -> how it was called
   - -> what it responded with
   - verifies indirect outputs
   - can add to existing or replace
   - EX: validator was called once
3. Mock objects
   - verifies behavior
   - -> expectations of how something was called
   - -> Fails test if unused unexpectedly
   - doesn't return anything
   - use for the method being tested
   - EX: saving only calls the DB once
4. Fake objects
   - Working implementation which take a shortcuts
   - -> not usable in production
   - EX: replace DB with in-memory array with teh same API
5. Dummy objects
   - Provides parameter for tested method
   - EX: Testing reservation validation with arbitrary input

In Jest everything is a Mock:

- Jest mocks stub out functionality
- Jest mocks spy to keep track of usage
- Jest mocks provide expectations around usage
- Jest mocks include fake times

## Mocking functions for test code in Jest

Jest provides mock functions:

- change function implementation
- capture calls an parameters
- set the return values

Mocking functions and modules:

1. `jest.fn(?implementation)` -> returns `undefined` by default
   - mocks a function
   - creates a new empty mock function
   - `implementation` -> optional value with what you want to return instead of `undefined`
   - includes special `mock` property:
   - -> .mock.calls: for each call, array of arguments
   - -> .mock.instances: actual instances created
   - -> .mock.invocationCallOrder: incrementing count of mock function calls to determine if something was called before or after something else
   - -> .mock.results: for each return, type and value
2. `jest.mock(moduleName)` - mocks a module
3. `jest.spyOn(object, methodName)`
   - mocks a module
   - spies on methodName

Example of function mocking:

```js
// Mocking a function
const mockFunction = jest.fn();
const actual = mockFunction;

expect(actual === undefined).toBe(true);
expect(actual).toBeUndefined();

// another mock function
const expected = "value";
const mockFunction = jest.fn(() => expected);
const actual = mockFunction();

// another mock function
const expected = "value";
const mockFunction = jest.fn();
mockFunction.mockImplementation(() => expected);
// for replacing functions from modules
const actual = mockFunction("text");

expect(mockFunction.mock.calls.length).toBe(1);
expect(mockFunction).toHaveBeenCalled();
expect(mockFunction).toHaveBeenCalledTimes(1);

expect(mockFunction.mock.calls[0]).toEqual(["text"]);
expect(mockFunction).toHaveBeenCalledWith("text");

// Call order
const first = jest.fn();
const second = jest.fn();

first();
second();

expect(first.mock.invocationCallOrder[0]).toBeLessThan(
  second.mock.invocationCallOrder[0]
);

// Tracking instances
const mockFunction = jest.fn();
const instanceEmpty = mockFunction();
const instanceValue = mockFunction("value");

expect(instanceEmpty).toBe(mockFunction.mock.instances[0]);
expect(instanceValue).toBe(mockFunction.mock.instances[1]);
expect(mockFunction.mock.instances.length).toBe(2);
```

Backup while mocking:

1. `jest.fn()` doesn't automatically backup/restore
2. If skipped, will alter the function being tested for other tests in the same file
3. Backup/restore is npt requires if all tests use the same mock
