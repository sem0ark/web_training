Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program
Completed by Arkadii Semenov on 2023-02-18

## Testing frameworks and automation

Different testing can be automated with the usage of testing framework:

- Separate software from application
- Controls test execution (ordering and filtering)
- Avoids repetitive tasks
- Defines how assertions are defined
- Controls and interacts with tested application
- Executes tests
- Reports results -> individual and aggregate

Assumptions of testing framework:

- Responsibility delegation
- Focusing on writing tests

Concepts:

- structural consistency
- tests -> what the test does
- results -> collection and reporting

Test framework tools:

1. Environment setup
2. Application control
3. Test data
4. Execution control
   - Subset of tests
   - Thresholds of acceptable failure or execution time

Test phases:

1. Setup -> initialize the data
2. Execution -> run the code to be tested
3. Validation -> check if the result of execution matches the expected
4. Cleanup -> delete and application state is restored

**Node.js testing frameworks**:

1. Mocha
2. Jasmine
3. Jest

## DSL

Every testing framework provides DSL - domain specific language, it:

- standardizes vocabulary
- improves communication
- how to interact with the framework

Examples:

- **TDD - Test-driven development**
- **BDD - Behavior-driven development**

#### Test-driven development

It is a software development process, where:

- Requirements turned into test cases
- Software improved until tests pass
  - Re-run tests to get feedback
- Pure TDD can be too extreme -> More important to have a feedback loop

#### TDD vs BDD

- **Technically the same**
  - Difference in vocabulary and approach
- **TDD** - terminology about testing
  - describes when it works or doesn't
  - Problem: too literal -> fragile tests
- **BDD** - terminology about behavior examples
  - describes how and why with examples

#### BDD

Acceptance criteria as a scenario:

- Given some initial context
- When an event occurs
- Then ensure some outcomes

> Dan North, **Introducing BDD**

Example:
Scenario -> Reservation should be created with valid email:

- **Given** a submitted email
- **And** the email is valid
- **When** the reservation is created
- **Then** ensure the reservation is created
- **And** reservation email is what was submitted

```js
describe("reservation creation", () => {
  it("should create a reservation with a valid email", () => {
    const email = "username@example.com";
    const reservation = new Reservation({ email });
    expect(reservation).toHaveProperty("email", email);
  });
});
```

> Further reading:
>
> 1. [TDD vs BDD vs ATDD: Key Differences](https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd)

## Assertion for correctness

Assertions:

1. validate the correctness of a unit
2. Declares predicate to be boolean TRUE

Assertion library:

1. Collections of assertions
   - More than in Node.js `assert` module
   - Comparison for many structures
2. Provides APIs to create predicates
   - interfaces like TDD and BDD
3. Assertion chaining
   - supported by some APIs
   - special kind of assertion
   - natural language descriptions
   - have multiple aliases - to build readable sentences from tests

Examples of assertions:

1. toBeDefined - not undefined
2. any - created by a given constructor, like Number
3. toBeInstanceOf - instance of constructor
4. toHaveProperty - nested properties
5. resolves - object is a promise and will resolve to a value

Example of chaining:

```js
it("should create a reservation with a valid email", () => {
  const email = "useremail@example.com";
  const reservation = new Reservation({ email });
  reservation.should.have.property("email").and.equal(email);
});
```

#### Assertion libraries

- `Assert` - native for Node.js
- `Chai`
- `should.js`
- Built-in
  - `Jasmine` - matchers
  - `Jest` - expect methods
