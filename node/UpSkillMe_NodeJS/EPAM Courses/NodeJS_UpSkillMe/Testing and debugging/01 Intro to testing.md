  
Links:
- [Next](02%20Testing%20frameworks,%20TDD%20and%20BDD.md)

Tags: #notes/web/epam/upskillme #sci/pro/dev/testing #sci/pro/practices

Date: [20230218](../../../../200%20Diary/205%20Day/20230218.md)
Time: 19:22:02
_____

Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program. Completed by Arkadii Semenov on 2023-02-18.

Good and clean code is easiest to maintain. We would clean up a complete but buggy project.

[Link to the course](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857/cleaning-your-codebase?autoplay=true&resume=false&u=106534538)

In this course, Jon Peck shows how to measure quality, implement testing, and measure code coverage in your Node.js apps, using a complete but buggy restaurant booking application to illustrate the concepts.

You will discover how to create coding standards and become familiar with different types of automated testing, such as unit, integration, and functional testing.

You should know:

1. Practical experience with node.js
2. ES6, ES2020

Used:

1. Express
2. Knex and SQLite

Additional notes:

1. use `npm config set production false` to switch to development mode

### What is code quality?

Code is a communication:

1. Computers interpret and execute the code -> Instructions and rules
2. People read and write code -> Describes intent

Engineering challenges:

1. Communicate intent and goals
2. People and computers must understand
3. Mistakes happen -> people adapt in response
4. Computers are literate with interpretation

Course goal -> improve communication between software and computers.

What is code quality?

1. Product features that meet the needs of the customer.
   - code does what it is supposed to do
   - meets functional requirements
2. Freedom from deficiencies.
   - no failing or shortcomings -> useful and maintainable
   - code should be reusable and flexible
   - it is maintainable
   - it is useful in multiple places

Is code is maintainable:

1. Can you maintain the code
2. Can someone else maintain the code without asking for help?
3. Can someone else read the code and understand the intent?

Code maintainability

- Can improve or get worse over time
- Goal: continual improvement

How to check the maintainability:

1. Peer review -> let someone else to check the code
2. Use standard techniques for improvement:
   - Consistent formatting and logical naming -> help reading
   - Clear comments and functional docs -> describes intent
   - Modular components -> reusable code

Should all code be high quality?

- strive for excellence
- be reasonable
- one-off scripts can be necessary
  - document what, why and when

How to ensure code quality?

- Using coding standards.

## Coding standards and conventions

Coding conventions:

1. Set of guidelines for language
2. Programming style -> readability
3. Practices -> how to build and architect
4. Methods -> how to plan and implement

Coding standard:

1. Set of coding conventions
2. Designed to produce quality code
3. Formally specified for projects

Programming Style conventions:

1. Comments
   - documentation of methods and functions
   - can include spelling and punctuation
2. Whitespace (must be consistent)
   - handling multiline comments
   - using whitespace
   - spaces or tabs
   - line length (100 char)
   - sequential lines + line-endings
3. Naming and capitalization of identifiers and properties
   - Data types and constructions -> PascalCase
   - Methods -> lowerCamelCase
   - length and meaningful
4. Possible errors and handling
5. Security and spelling, etc.

## Creating and enforcing coding standards

1. Determine what's available and appropriate
2. Decide what hat the most positive impact, because something can be needlessly annoying, etc. -> experiment
3. Briefly document about usage of rules and the cause
4. Create configurations for code
5. Revise regularly

Advices:

1. Involve the whole team and build consensus
2. Goal is gradual improvement
3. Coding standard pitfalls
   - too many rules
   - overly pedantic rules (too literal and academic)
   - needlessly strict rules -> spell checking comments

How to enforce the standards:

1. Using a linter:
   - Tool that flags suspicious usage in code
   - Performs static analysis
   - Can be configured with rules and tuned with rules
   - Can auto-fix some errors
   - Can be integrated with editors
   - Run before the peer review
2. Peer review
   - Reviewer and the programmer should have the same expectations
   - Peer reviews should be logic and intent
   - New and modified code should pass linter
3. Rules for peer reviewers
   - read the book **The elements of programming style**
   - write clearly and don't be too clever
   - say what you mean, simply and directly
   - use library functions whenever feasible

## Unit testing

What is Unit? -> smallest testable part of the application:

1. In procedural style
   - Entire module
   - Individual function
2. OOP
   - Interface, like class
   - individual method

#### Unit tests:

1. Test the code in an isolated manner via API.
2. Are performed in memory.
3. Safe to run repeatedly.
4. Fast execution.
5. Made up of assertions
   - statements that a predicate is going to be TRUE
   - throws error if FALSE
   - examples: ok, equal, deepEqual, strictEqual, throws, etc.

```js
// Unit test example
const assert = require("assert");
const cat = () => "woof";
assert.equal(cat(), "meow"); // -> would throw an AssertionError
```

What if we have some dependencies?

- Isolate behavior of tested unit -> dependencies are simulated
- Unit tes your custom code -> not core or third-party code

## Integration testing:

- Builds on unit tests
- Combines and tests resulting combinations
  - APIs, UIs and results
- One system or cross-systems
- Uses full or partial environment
- More complex and harder to maintain

Uses the same tools as Unit testing.

## Functional testing:

- Focus on result, not code -> like UI
- Checks a specific feature
  - -> Compare results against specification
  - -> usually written in user workflow chart
- Typically automated
- Slower than unit and integration tests

Example written pseudo code:

1. Anonymous user visits from page
2. Clicks Reservation link
3. Sees "Book a table" on page
4. Enters username for email in form
5. Clicks Request Booking button
6. Sees "Invalid Email" on page
7. Enters username@example.com
8. Clicks Request Booking button
9. Sees "Reservation created" on page

## System testing:

- Similar to integration testing
- Complete system -> application and environment
- Find defects between pieces and system as a whole

Types:

1. Performance
   - Stress tests for reliability
   - Load tests for scalability
2. Security scans
3. Usability and UX
4. Compatibility
5. Anything that requires the entire system

## Regression testing

- Regression -> software bug - feature fails after a change
- Re-running unit and integration tests
