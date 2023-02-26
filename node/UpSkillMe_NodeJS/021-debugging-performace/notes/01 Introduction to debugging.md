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
   -  Response duration in seconds
   -  Response size
   -  number of file requested
   -  HTTP status codes
2. Response times -> useful when the error only in front- or back-end
   -  time until connection to remote host is complete
   -  time for all redirections
   -  from start to first byte
   -  from first byte received to page fully loaded

#### Documenting errors

-  describe it clearly
-  be brief but thorough
-  give context and steps to replicate
-  include raw data like performance measurements

Best practices:

-  document as promptly and ASAP
-  keep errors in central location
-  track progress and resolution
-  use some way to track problems like GitHub, Jira or simply a text file

Further reading:

1. [What Does a No Blame Culture Actually Look Like](https://www.investorsinpeople.com/knowledge/no-blame-culture-actually-look-like/)

Resolving problems:

-  document the issue
-  determine the slope of the problem
-  determine the severity of the problem
-  settle or find solution by solving and not solving the issue

### Introduction to Microservices

It is a high performance architecture patters where:

-  The application is built from independent, modular services.
-  Services communicate with standard protocols.
-  Each service is distinct and purpose-built.
-  Loosely coupled for simplicity and sustainability.

Why to use?

-  different teams can work on services independently
-  problems can be localized

Possible problems:

1. It requires careful planning and discipline
2. Errors can affect multiple services that rely on it
3. Determining root causes can be difficult
4. It can be overkill for very small applications

NB! **Don't share databases across multiple services!**

#### How to run Node.js microservices

If we run with node:

-  one process at a time
-  doesn't watch for changes

If we run with nodemon:

-  one process at a time
-  only for development

We should use `pm2` which is a process manager: -> used in the course

1. Runs a background service
2. Controls and manage Node.js processes
3. It supports starting and stopping on changes/error
4. Monitors recourses.
5. Gathers logs in one place.
6. Can be also used for more prompt debugging:
   -  number of restarts
   -  amount of resources used
   -  controlling the process without knowing the id

Other process managers:

-  `StrongLoop` Process manager
-  `forever`

#### Using `pm2`

First you need to configure `pm2.config.js` in root folder, and so create the configuration file for `pm2` as:

```js
const path = require("path");
module.exports = {
   apps: ["web", "games", "players"].map((name) => ({
      // we need to create objects for all services
      name, // the name of the service
      cwd: path.resolve(__dirname, `./servers/${name}`), // access path
      script: "./index.js", // how to run the service from teh folder
      watch: [".", "../shared", "../../node_modules"], // what need to also include
      instance_var: "INSTANCE_ID",
      env: {
         // additional environmental variables
         NODE_ENV: "development",
         NODE_PATH: path.resolve(__dirname, "./node_modules"),
      },
   })),
};
```

In the course we've installed pm2 globally. `npm install -g pm2`

Commands for `pm2` managing services:

-  Starting the services: `pm2 start ./pm2.config.js`
   -  would start services print general data about their status
-  Show general info about all services `pm2 list`
-  Show specific info about the service `pm2 show serviceName`
-  `pm2 stop serviceName` - stop the service
-  `pm2 start serviceName --watch` - start the service + watch for changes
-  `pm2 kill` - stop all the services + stops `pm2`
-  `pm2 -h` - to get help (the list of commands)
