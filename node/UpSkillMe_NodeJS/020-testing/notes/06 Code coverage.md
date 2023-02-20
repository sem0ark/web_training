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
