Notes on the course Node.js Testing and code quality from EPAM UpSkillMe program
Completed by Arkadii Semenov on 2023-02-18

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

#### Coding standards and conventions

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
