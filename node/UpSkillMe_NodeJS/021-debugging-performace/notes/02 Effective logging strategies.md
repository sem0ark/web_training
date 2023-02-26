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

#### Implementing loggers

Request logger for Express:
It would be useful to records every request from express:

-  we would create it as a middleware.
-  place after static files and before routing
