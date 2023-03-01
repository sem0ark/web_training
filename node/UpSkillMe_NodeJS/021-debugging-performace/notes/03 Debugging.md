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
