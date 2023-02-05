
Links:
Tags: #notes/web 

Date: [[20230203]]
Time: 19:22:12
____

#### JavaScript Basics
(2023-02-03 19:31:20) UpSkillMe_Node.js. JavaScript Basics, practice task "Asynchronous"
[Link to the page](https://elearn.epam.com/courses/course-v1:EPAM+CIS202DE_Backend+0422UpSkillMe/courseware/da67d9b8314243d0852a6ea1e0786453/4cd64b93bc0b4799beaba05e4cea9184/5?activate_block_id=block-v1%3AEPAM%2BCIS202DE_Backend%2B0422UpSkillMe%2Btype%40vertical%2Bblock%400804c8dc10224873922c8bc3273590eb)

The Autocode quality checker reduces the total points due to bad quality of the code in the test folder, which the student shouldn't touch.

Text of the failed quality cases in one of the tries:
**File:** test/index.js
**Line:** 62
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 69
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 76
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 84
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 92
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 99
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 106
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 114
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 122
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 131
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 138
**Message:** Refactor this redundant 'await' on a non-promise.
**Rule:** javascript:S4123
Critical, Code Smell

**File:** test/index.js
**Line:** 105
**Message:** Replace this trivial promise with "Promise.resolve".
**Rule:** javascript:S4634
Major, Code Smell

**File:** test/index.js
**Line:** 112
**Message:** Replace this trivial promise with "Promise.resolve".
**Rule:** javascript:S4634
Major, Code Smell

**File:** test/index.js
**Line:** 120
**Message:** Replace this trivial promise with "Promise.resolve".
**Rule:** javascript:S4634
Major, Code Smell

**File:** test/index.js
**Line:** 75
**Message:** Replace this trivial promise with "Promise.resolve".
**Rule:** javascript:S4634
Major, Code Smell

**File:** test/index.js
**Line:** 82
**Message:** Replace this trivial promise with "Promise.resolve".
**Rule:** javascript:S4634
Major, Code Smell


(2023-02-03 19:31:20) UpSkillMe_Node.js. JavaScript Basics, practice task "Classes"

[Link to the page](https://elearn.epam.com/courses/course-v1:EPAM+CIS202DE_Backend+0422UpSkillMe/courseware/da67d9b8314243d0852a6ea1e0786453/4cd64b93bc0b4799beaba05e4cea9184/3?activate_block_id=block-v1%3AEPAM%2BCIS202DE_Backend%2B0422UpSkillMe%2Btype%40vertical%2Bblock%407628dc1ad9304dc08d7fc10a1e82b2b8)

The description of the task should be redefined. Even though in the description is specified that some methods shouldn't be implemented at all, the test.js complains that they should be there.
After some trial and error was found that adding NotImplementedError with the specific text works fine.

Text of the failed test cases in one of the tries:
**Test name:** Guest should not implement method createTask
**Failure message:** `AssertionError: expected undefined to be a function at Context.<anonymous> (test/index.js:20:38) at processImmediate (internal/timers.js:464:21)`

**Test name:** Guest should not implement method changeType
**Failure message:** `AssertionError: expected undefined to be a function at Context.<anonymous> (test/index.js:25:38) at processImmediate (internal/timers.js:464:21)`

**Test name:** User should not implement method changeType
**Failure message:** `AssertionError: expected undefined to be a function at Context.<anonymous> (test/index.js:55:41) at processImmediate (internal/timers.js:464:21)`

#### Node.js and Express
(2023-02-03 19:53:29) UpSkillMe_Node.js. Node.js and Express
[Link to the page](https://elearn.epam.com/courses/course-v1:EPAM+CIS209DE+0422UpSkillMe/courseware/654d13be16e549aaa2bff4aa0842e178/109e6ee636d64f6eb4c2e1f63c11b011/1?activate_block_id=block-v1%3AEPAM%2BCIS209DE%2B0422UpSkillMe%2Btype%40vertical%2Bblock%40f0446c142a174fd1aab6503dfbd56be2)

Question: is there a possibility that the variants from another question were passed?

How can we tell multer to handle a single file that will be sent with a form and have the field name image?
1. `multer({  limits: {  fileSize: 1024 } })`
2. `multer({ fileSize: 1024  })`
3. `multer.fileSize = 1024`
Correct: We need to call the function single and specify the field name in the arguments.

(2023-02-03 21:31:46)
The overall course on the creation of REST API with Express is a bit deprecated, so some parts of the code and declarations have changed. Maybe recommendations from the LinkedIn commentaries should be added to the course notes.

[Link to the course](https://www.linkedin.com/learning/advanced-express/)

Possible issues with the code, from the comments:
1. `bcrypt` dependency issues, consider using `--force` flag during the installation. You can also modify package.json as follows: "bcrypt": "^5.0.1", then run: npm install and should work
2. Logout code (video 3.9) for passport has changed. Refer to https://lnkd.in/gZSbjsjQ
3. Solving the Session problem >>> const MongoStore = require('connect-mongo'); >>> remove the (session) part >>> then when you initialize the Middleware >>>  app.use(session({ secret: 'very secret', resave: true, saveUninitialized: false, store: MongoStore.create({mongoUrl: process.env.TEST_DB_DSN}), })); >>> the mongoUrl could be any of the 3 databases that we created (test, development or production). This should solve the problem.
4. If anyone is experiencing a connection timeout error when trying to connect to Mongoose, the solution is to modify /lib/db.js file >>> const mongoose = require('mongoose'); module.exports.connect = async dsn => mongoose.connect(dsn); >>> note that I have removed {useNewUrlParser: true} This came up for me in then end of chapter 2. Hope it helps!

