Notes on the course Node.js: Debugging and Performance Tuning from EPAM UpSkillMe program. Completed by Arkadii Semenov on 2023-03-01.

Debugging includes:

1. Logging for record, context
2. Getting the steps to reproduce the bug
3. Knowing what is working
4. Finding where and why the problem is occurring

There are four standard types of bug locating:

1. Splitting/binary search
   -  Find a midpoint between two locations where problem could occur
   -  experiment ot check results
      -  -> adding logging
      -  -> if it is not in one half - it is in second half
2. Hypothesizing
   -  Use knowledge of the system
   -  -> Understand what _is_ working
   -  Rule out sections where it is probably not working
   -  Choose a hypothesis to localize and experiment ot test
      -  Ex: "I think the problem could be here, because..."
3. Experimentation and observation
   -  try different test cases
   -  add logging to observe probably broken section
   -  use debugger to control the system execution
4. Rubber Ducking : _Pragmatic programmer_
   -  Programmer carries a rubber duck
   -  He explains the program line by line
   -  -> Act of explaining reveals the problem

#### What does the debugger?

-  Watch expression and variable values
-  Place breakpoint to pause and evaluate watchers
-  See values when paused and control execution

#### Node.js debugger

-  out-of-process debugging utility
-  controls and inspects node processes
-  accessible by `V8 Inspector` agent
-  chrome devTools or VS Code as a client

Running the debugger:

-  run Node in special mode
-  stop currently running services
-  Enables node inspector agent
   -  `--inspect` - default 127.0.0.1:9929 (127.0.0.1 - localhost)
   -  `--inspect=[host:port]` - configured version
   -  `--inspect-brk` - inspect byt break before code starts
   -  `--inspect-brk=[]` - configured version
   -  Run with `node inspect the_file.js` - starts agent and cli client
-  place break point in code as `debugger;`
-  run inspection, after every break use:
   -  `cont` - continue to next break point
   -  `next` - next line
   -  `repl` - run CLI where you can type the values and it would be shown, `Ctrl+C` to exit
   -  `help` - check other commands
   -  `.exit` - to exit the debugger completely and the code

#### Chrome dev tools

-  Run the debugger as `node --inspect the_file.js`
-  Go to Chrome type `chrome://inspect` and click the found foreign process
-  Here is simple UI, but you can not only inspect, but change values!
-  Use pause on exceptions to check for exceptions **Can be used for Express forgotten next() problem!**

#### VS Code debugging

-  Debug - click debugging - open configurations - add configuration as:

```json
{
   "version": "0.2.0",
   "configurations": [
      {
         "type": "node",
         "request": "launch",
         "name": "Node.js",
         "skipFiles": ["<node_internals>/**"],
         "program": "${cwd}/021-debugging-performace/RockPaperScissors/servers/web/index.js",
         "console": "integratedTerminal"
      }
   ]
}
```

-  Press F5 to run in the debug mode - use debugger
-  you can also place break points
-  upon running you can also use debug console -> the same as `repl`
-  in `variables` you can double-click to change variable value

#### ::NB!::

-  Don't use pm2 with debugging! - awkward and complex -> just start inspector agent directly.
-  Exposing debugger publicly is a **major security hole** - never use it in production
-  Local system + firewall should be enough for security when debugging

Further reading:

1. [Node.js Debugging Tips](https://stackify.com/node-js-debugging-tips/)

## Measuring site performance

Benchmarking performance:

-  measures operation times
-  can be external and internal

**Benchmark** - measurement of time needed to complete the whole operation, such as:

1. Server response time by route
2. Function call
3. One iteration through a loop
4. Database queries

Types of benchmarking tools:

1. HTTP (external)
   -  Don't require code modification
   -  Measures granular response times
   -  Can simulate server load
   -  Useful for stress testing
   -  Examples of tools:
      -  `ab` -> httpd.apache.org
      -  `httperf`
      -  `wrk` - good for stress testing
2. Core (internal)
   -  Require code modification, like:
      -  Place a timer at start, end; log result
      -  Report that measures specific functions
   -  Granular measurement of parts of a system
   -  _does not_ measure latency like network response times
   -  Examples of tools:
      -  `node.js` console time/timeEnd
      -  `winston` timer
      -  `Debug` module

Benchmark module:

-  compares operations to each other

#### Benchmarking ApacheBench

-  `ApacheBench` can be used on any HTTP server.
-  It is included with apache http server. (can be installed with XAMPP)
-  It produces report on completed and failed requests, you can also measure requests per second.
-  It can compare to measure progress of the optimization process.

Using apache bench:

1. `ab -n 1000 -c 5 http://localhost:5000/
   -  -> run 1000 requests to http://localhost:5000/, running 5 requests concurrently
   -  highlights:
      -  average time was relatively fast
      -  a session and player was created for every new request
      -  should session and player creation be automatic?
