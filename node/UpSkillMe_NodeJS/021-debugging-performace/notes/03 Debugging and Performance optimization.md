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
         "program": "${cwd}/021-debugging-performance/RockPaperScissors/servers/web/index.js",
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

#### Benchmarking with winston

We can use timers provided by winston to benchmark our code:

Example:

```js
const timer = logger.startTimer();
// use you logger to initialize a new timer
// Do some code operations...
timer.done(`${request.id} Get game by id #${id}`);
// your message would be should be shown in console and duration= e.g. 123ms
```

#### Profiling code execution

Code profiling:

-  Dynamic program analysis -> program is running
-  Can track:
   -  number of time the function called
   -  method duration
   -  resource usage

Node profiler uses V8's profiler

-  records JIT compiles, regular samples
-  saves all data to log file, which should be read with a tool
-  node already includes the profiler

Some IDEs Include profilers.

**How to use profiler?**:

1. stop processes with `pm2`, like `pm2 stop web`
2. run `node --prof TARGET` -> Log file is generated in the current directory like `isolate-0xasomenumber-v8.log`, and run some actions to see the performance
3. to see the report run `node --prof-process isolate-0xasomenumber-v8.log > profiler.txt` we would see the statistics in a text file

Here we would see:

1. ticks -> both JIT compiles, sampled events
2. total -> CPU time

## Conclusion

#### What to optimize?

Make informed decisions:

1. Measure performance
2. Record results over time
3. Compare techniques and history

Is everything up tp date?:

1. Node.js
2. Modules in package.json
3. Databases and OS
4. Updates bring optimizations and security fixes
5. It is easier to make progressive updates
6. Node.js Major versions bring performance increases
   1. There are breaking changes, but usually obscure
   2. Check the node.js wiki to stay informed
7. Use only packages what you need
   -  only require necessary modules -> reduce RAM usage
   -  evaluate modules you're using -> are they being kept up to date?
   -  use `npm-check` to validate your code
      -  check for outdated, incorrect, unused dependencies
8. Avoid boilerplates
   -  includes unnecessary components
   -  often out of date
   -  you don't understand why are they working
9. handle all exceptions
   -  use try/catch and promise/catch
10.   Micro-optimizations

-  tuning to address perceived performance dependencies
-  it is tempting just because of minor benchmark
-  **Implement major functionality, address outliers**
-  **Optimize because you know it makes drastic difference!**

> The idea: **"Measure first, fix what is necessary!"**

#### Caching crash course

Caching - storing and retrieving data from a temporary storage.

-  Store slow and inefficient operations
-  Data in cache is stored with expiration time (or TTL - time to live)
   -  it is a counter that limits a lifetime of the cached data
   -  balance staying current and performance
-  _It is similar library checkouts_

Example: Requiring game data by ID from API

-  Check if it is cached
   -  Yes -> return cached data
   -  No -> get from API -> store data in cache -> send the data

**Cache invalidation**: Entry is removed or replaced upon changes in structure

Example: remove old cache if game is updated and replace with updated

Caching should take place in multiple layers:

1. Back-end caching
2. HTML, JS. CSS, images in browser
   -  metadata from response headers

#### Next

1. After fixing problems...
   -  prevent the problem from happening again
   -  testing, coe quality tools can detect errors
      -  `Node.js testing and code quality` course
2. Log aggregation
   -  find trends
   -  associate events
   -  create alerts
   -  examples
      -  `Logstash`
      -  `Graylog`
      -  `Spunk` -> enterprise
3. Application performance management `APM`
   -  monitor performance an availability of apps
   -  produce metrics, reports on stability and performance
   -  Examples
      -  `AppDynamics`
      -  `New Relic`
4. More caching and performance
   -  `Designing websites for performance`
   -  `Learning enterprise web application performance`
   -  `Databases for node.js developers`

Further reading:

1. [What Does a No Blame Culture Actually Look Like](https://www.investorsinpeople.com/knowledge/no-blame-culture-actually-look-like/)
2. [Node.js Logging Best Practices](https://blog.logrocket.com/node-js-logging-best-practices/)
3. [Node.js Debugging Tips](https://stackify.com/node-js-debugging-tips/)
