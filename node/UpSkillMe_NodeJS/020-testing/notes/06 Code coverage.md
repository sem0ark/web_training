Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program
Completed by Arkadii Semenov on 2023-02-20

## Reporting on your codebase

Why code coverage matters?

- higher coverage reduces risk of bugs
- highlights unused or untested pieces of code
- indicator of code quality
- requirement in some industries

Code coverage => measure how much code is executed

- typically from a test suite

Types of coverage:

1. Statements
   - -> proportion of executed statements
   - performs an action
   - may span multiple lines
   - group keywords
   - Ex: const; if...else
2. Branches
   - -> proportion of branches
   - each statement in a conditional
   - ex: if...else; or; and; not; ternary operator
3. Functions
   - -> proportion of called defined functions
4. Lines
   - -> proportion of executed lines

We usually see the statistics in these types of coverage.

> Further reading:
>
> 1. [Code Coverage Tutorial: Branch, Statement, Decision, FSM](https://www.guru99.com/code-coverage.html)

## Measuring code coverage with Jest

Jest uses Istanbul for code coverage from istanbul.js.org. It is already installed with Jest.

- Watches code execution
- track how well unit tests exercise codebase
- CLI is `nyc`
- Also supports mocha, ava, etc.

Istanbul reporters:

- Text
- HTML
- LCOV -> standard for recording coverage, initially designed for Linux source code, used by 3rd party tools
- Clover -> old

If we add into our testing code `"test": "jest --coverage"`. Jest wouldn't only test the code, but also generate the report on code coverage + create a coverage directory where in lcov we would find the html file with HTML report.

We can also use `Coverage Gutters` plugin to watch the coverage of the code by lines.

## Functional testing with Jest

Functional testing tools:

1. Selenium WebDriver
   - Nightwatch.js
   - WebdriverIO
2. SuperAgent - faster and lighter
   - SuperTest -> easy to get started and doesn't require software or servers running + compatible with Jest

> we can also run `npm test -- --verbose` to see all the passing and not passing test messages

#### Using SuperTest

- install with `npm install supertest -D`
- Accepts http.Server or function
- if server not listening on a port, picks a random port, so don't need to specify port in tests
- use http verbs to interact
- includes optional expectations
- returns response that can also be tested

Functional tests - As a user, I want to:

- see a reservation form -> book a table
- submit a valid reservation -> thanked on success
- submit an invalid reservation -> informed of problem

NB!

- -> functional tests may be slow because they require much more code to be executed!
- requiring all app is slow

**The solution**:

- in test, create a simple express app to run the server
- Add just the route to test
- Code isolation speeds execution, but requires some

Example with SuperTest:

```js
const request = require("supertest"); // require the tester

let app;

const mockMorgan = jest.fn((req, res, next) => next()); // mocking teh dependencies
const mockInsert = jest.fn().mockResolvedValue([1349]);

beforeAll(() => {
  // create mocks for all the dependencies
  jest.mock("morgan", () => () => mockMorgan);
  jest.mock("../lib/knex", () => () => ({
    insert: mockInsert,
  }));
  app = request(require("../app"));
});

afterAll(() => {
  /* unmock all the mocks */
});

describe("POST", () => {
  // describe all POST methods
  it("should reject an invalid reservation request", async () => {
    const response = await app.post("/reservations").type("form").send({
      /// some data
    });

    expect(response.text) // here we just search for text
      .toContain("Sorry, there was a problem with your booking request.");
    expect(response.status).toBe(400); // check the response status
  });

  it("should a valid reservation request", async () => {
    const response = await app
      .post("/reservations")
      .type("form")
      .send({
        /// some good data
      })
      .expect(200); // expect 200 response (shorthand)

    expect(response.text).toContain("Thanks, your booking request #1349"); // searching for text
  });
});
```

> For real HTML parsing use cheerio.org.

## Fallacies of 100% code coverage

Should you go for it? - Yes, but...:

- it doesn't mean that the code is bug-free
- it doesn't mean that you wrote good test
- it doesn't deliver new functionality
- it doesn't substitute a code review
- it could mean that your tests were not properly isolated
- should be balanced with delivery of the functionality

## Code coverage with CI

When code merged into central repo:

1. It automatically builds and execute tests
   - unit tests
   - linting
   - functional testing, etc.
2. In case of anything -> automatically reports the problem

Useful CI OpSS for CI:

1. Jenkins -> jenkins.io
   - written in Java
   - highly extensible
   - most popular
2. Buildbot
   - written in Python
3. Spinnaker
   - written in Java
   - designed for cloud platforms

Features:

- All are extensible and flexible
- All support multiple servers (coordinator, workers)

You can also use some pre-existing as a service tools for CI/CD:

Code hosting and CI/CD:

- GitHub (actions)
- GitLab (CI/CD)
- Bitbucket (pipelines)

Specific CI/CD:

- CircleCI
- Travis CI

Desirable CI features, it should...:

- match your production environment
- be easy to configure and use
- be scalable
- integrate with your workflow, like reporting problems on pull requests

## Improving a codebase

- set achievable and reasonable goals
- research how
- write a plan
- focus on choices that improve code quality
- getting team buy-in
- collaborating standards
- making decisions that are good for the group
- write brief but accurate documentation
- try to alternate approaches
