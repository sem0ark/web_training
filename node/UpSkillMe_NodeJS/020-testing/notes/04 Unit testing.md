Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program
Completed by Arkadii Semenov on 2023-02-19

## Survey on Node.js testing modules.

Most popular Node.js testing frameworks:

1. `AVA` - avajs.dev
   - minimalist
   - includes assertions and TypeScript definitions
   - very fast + concurrent test executions
   - does not add to global namespace
2. `Jasmine`
   - Synchronous test execution
   - very popular
   - no external dependencies
   - includes assertions, test doubles, etc.
   - Adds to global namespace
3. `Jest` -> would be used in that course
   - very popular
   - async testing
   - react support (snapshot testing)
   - includes test doubles
   - adds to global namespace
   - interactive watch
   - most out of the box
   - tests can be ported to other frameworks
4. `Mocha`
   - oldest and popular
   - sync testing (async support)
   - flexible (supports plugins)
   - Doesn't include assertions and mocks
   - Adds to global namespace
   - File watcher
5. `tape`
   - minimalist
   - sync testing
   - no setup or teardown namespace
   - explicitly state when tests are complete

#### Installing Jest

1. `npm install jest -D`
2. Edit package.json
   - Add "test": "jest" to scripts
3. Add ESLint env config for Jest globals
4. Add some tests

## What and where to unit test

Start from atomic parts!

Where to put?

1. Separate test directory
   - mirror structure of the app
   - ++ easy structure, clean
   - -- repetitive, not in sync
2. Keep in the same directory -> used in the course
   - ++ everything always in sync
   - -- lots of files, naming

#### Test organization

> Further reading:
>
> 1. [F.I.R.S.T Principles of Testing](https://www.appsdeveloperblog.com/the-first-principle-in-unit-testing/)

1. Structure tests inside of suites
   - in jest `describe` for scoping + supports nesting
   - in jest file is implicit suite

What to test first?

1. Schema for the DB.
   - combineDatTime -> Atomic, standalone, consistent

Writing our first unit tests:

```js
// .....
describe("combineDateTime", () => {
  // name the suite

  it("should return ISO 8601 date and time with the valid input", () => {
    // the name of the unit test
    const date = "2017/05/10";
    const time = "06:02 AM";

    const expected = "2017-06-10T06:02:00.000Z";
    const actual = Reservation.combineDateTime(date, time);

    expect(actual) // assertion start
      .toEqual(expected); // we check if the actual result equals to the output
  });

  it("should return null on a bad date and time", () => {
    const date = "!!#$";
    const time = "fail";

    expect(Reservation.combineDateTime(date, time)) // assertion start
      .toBeNull(); // we check if the actual result equals to null
  });
});
```

Running the tests:

- Running `npm test`
- Running `npx jest` or `npx jest --silent`

#### Running the subset of the tests

If we add:

- `describe.only('...` -> run only this suite
- `it.only('...` or `fit('...` -> run only this test

_Jest also supports async code_:

- callbacks
- promises
- async/await

Because Jest runs the code as is, we should write our tests in slightly different way.

#### Testing callbacks

Jest uses the alternative version of `it`.

- use `test('...', done => ...` or `it('...', done => ...`
- if `done` -> waits until done is called to be finished
- otherwise timeout after _five seconds_
- `done` throws is given a value -> to check for unexpected error

Example:

```js
function toTest(callback) {
  setImmediate(() => callback("yay")); // to async run the callback
}

test("the right way to test a callback", (done) => {
  function callback(value) {
    try {
      expect(value).toBe("nope");
      done(); // complete the unit test case
    } catch (error) {
      done(error); // complete the unit test case with an error
    }
  }

  toTest(callback);
  // run the function with the callback with the inserted tests
});
```

> **NB!** if you try to write tests in sync way with callbacks it si an unsertain behavior!
> So be careful!

#### Testing promises

How to test?

- -> Return the promise and put the assertion in the `.then` or `.catch`.
- -> Don't use callbacks like `done`, of you give a promise to done, the test will automatically fail
- -> If you test catching rejections -> `expect.assertions(n)` to specify the number of assertions, otherwise the fulfilled promise would pass
- **Timeouts or unhandled rejections - unexpected behavior**

Useful functions:

- `resolves` -> wait for promise to be resolved. Rejected -> test fails
- `rejects` -> wait for promise to be rejected. Resolved -> test fails, don't have to specify the number of assertions

#### Testing async/await

```js
//......
// Run the function, expect the it's been resolved,
// and resolved value == reservation
await expect(Reservations.validate(reservation)).resolves.toEqual(reservation);

//......
// Run the function, expect the it's been rejected,
// and rejected `error instanceof Error`
await expect(Reservations.validate(reservation)).rejects.toBeInstanceOf(Error);
```
