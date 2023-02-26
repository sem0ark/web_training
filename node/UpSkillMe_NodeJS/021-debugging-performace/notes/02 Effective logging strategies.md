Notes on the course Node.js: Debugging and Performance Tuning from EPAM UpSkillMe program. Completed by Arkadii Semenov on 2023-02-26.

**Log** - a record of events and messages between systems

-  it is used to understand what's happening in our system
-  For `pm2` - use `pm2 log` to see logs of the project

#### What and why to log?

Why:

-  diagnose the health of the application
-  debugging to determine what and when
-  analysis of traffic and performance

What to log:

-  status of the operation
-  what was requested and how
-  who made the request -> _also log the success, maybe without a lot of specific info_
-  how long did the request take
-  identifiers, like transaction or record
-  log enough to learn about health, diagnose problems

**NB! Be careful logging:**

-  Personally identifiable information _PII_
   -  like PIs or POST request contents!
-  Research and abide by local regulations
-  Never log sensitive information! -> treat logs like databases!
-  financial info, passwords or credentials

#### Problems with Node.js console

It is blocking, so you would have to wait every single console.log to run...

It is a bit too simple:

1. `console.error` is the same as `console.warn`

#### Implementing loggers

Request logger for Express:
It would be useful to records every request from express:

-  we would create it as a middleware.
-  place after static files and before routing

```js
// simple logging
app.use((req, res, next) => {
   // adding basic request logging
   console.log(new Date().toISOString(), req.method, req.originalUrl);
   return next();
});
```

#### Logging levels

There are 8 different levels of logging considering the severity of the problem in the system:

-  0 - Emergency - system is unusable
-  1 - Alert - actions must be taken immediately
-  2 - Critical - critical conditions
-  3 - Error - error conditions
-  4 - Warning - warning conditions
-  5 - Notice - normal but significant condition
-  6 - Informational - informational messages
-  7 - Debug - for debugging

You can filer and sort messages from the system, e.g. you probably shouldn't include debgu info for production.

#### Other logging libraries for Node.js

Just choose one logger and use it.

1. `bunyan`
   -  Uses JSON logger and it is popular
   -  Structured for easy parsing
   -  Includes CLI tool for human readable formatting
   -  Can route to multiple places
   -  Levels -> fatal - error - warn - info - debug - trace
2. `debug`
   -  very minimal
   -  only one level
   -  can be only routed to a single destination (def - stderr)
   -  great for module development
   -  not great for application logging
3. `log4js`
   -  roughly based on Java project with similar name
   -  flexible and formattable
   -  routes output to multiple destinations
   -  supports custom levels
   -  can be faster when logging to syslog
4. `pino`
   -  extremely lightweight but powerful
   -  optimized for speed
   -  JSON formatted
   -  levels -> fatal - error - warn - info - debug - trace
   -  includes formatter for human readability
5. `winston` -> used in the course
   -  easy to use and very popular
   -  flexible and extensible
   -  multiple routing destinations
   -  includes simple profiling
   -  levels -> error - warn - info - verbose - debug - silly

#### Adding `winston` to add a logging

The usual practice - _Creating a shared logging library_

-  unify configuration throughout
-  prevents duplication of code
-  easy refactor if you change a logger
-  typically separate modules

1. `npm add winston`
