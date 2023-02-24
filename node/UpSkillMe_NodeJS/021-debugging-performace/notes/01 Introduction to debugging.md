Notes on the course Node.js: Debugging and Performance Tuning from EPAM UpSkillMe program. Completed by Arkadii Semenov on 2023-02-24.

### Introduction

Performance and quality are the key for keeping people on your site.
So, let's delve deeper into this topic and start with some introductory points. You will discover what software you should have to participate in the course and become familiar with the demo application that the author prepared for the course. Let's get the ball rolling!

Course goal:

1. diagnose and fix quality problems in node.js websites

#### Error fixing mindset, No blame culture

> Don't finger point, just solve errors. Goal - discover what went wrong and to fix it.

Advices for error and bugs:

1. Logging -> can you track down the place where the error occurred.
2. Documenting the code.

But what to do when the site is just slow?

Advices for monitoring performance:

1. Measuring web applications:
   - Response duration in seconds
   - Response size
   - number of file requested
   - HTTP status codes
2. Response times -> useful when the error only in front- or back-end
   - time until connection to remote host is complete
   - time for all redirections
   - from start to first byte
   - from first byte received to page fully loaded

#### Documenting errors

- describe it clearly
- be brief but thorough
- give context and steps to replicate
- include raw data like performance measurements

Best practices:

- document as promptly and ASAP
- keep errors in central location
- track progress and resolution
- use some way to track problems like GitHub, Jira or simply a text file

Further reading:

1. [What Does a No Blame Culture Actually Look Like](https://www.investorsinpeople.com/knowledge/no-blame-culture-actually-look-like/)

Resolving problems:

- document the issue
- determine the slope of the problem
- determine the severity of the problem
- settle or find solution by solving and not solving the issue

### Introduction to Microservices

It is a high performance architecture patters where:

- The application is built from independent, modular services.
- Services communicate with standard protocols.
- Each service is distinct and purpose-built.
- Loosely coupled for simplicity and sustainability.

Why to use?

- different teams can work on services independently
- problems can be localized

Possible problems:

1. It requires careful planning and discipline
2. Errors can affect multiple services that rely on it
3. Determining root causes can be difficult
4. It can be overkill for very small applications

NB! **Don't share databases across multiple services!**
