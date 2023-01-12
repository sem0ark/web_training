/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.27
 *
 * Express is a library for efficient creation and usage of the http servers.
 *
 * In the course would be used files as a website that should be controlled on the server ot make it more dinamic.
 *
 * Further reading:
 * 1. using template engines with Express https://expressjs.com/en/guide/using-template-engines.html
 * 2. routing https://expressjs.com/en/guide/routing.html
 * 3. using middleware https://expressjs.com/en/guide/using-middleware.html
 * 4. Error handling https://expressjs.com/en/guide/error-handling.html
 * 
 * */

const path = require('path');

const express = require('express');
const cookieSession = require('cookie-session');
const createError = require('http-errors')

const indexRoute = require('./src/routes/index');

const FeedbackService = require('./src/services/FeedbackService');
const SpeakersService = require('./src/services/SpeakerService');

const app = express();

const PORT = 3000;

app.set('trust proxy', 1);
// makes express trust cookies passed through a reverse proxy
// it can cause a lot of problems in either case

app.use(cookieSession({
  name: 'session',
  keys: ['ahfbaiweycoiIO7', 'bcrqiuyo39']
}));

const feedbackService = new FeedbackService('./src/data/feedback.json');
const speakersService = new SpeakersService('./src/data/speakers.json');

app.set('view engine', 'ejs'); // Here we tell express to use EJS
app.set('views', path.join(__dirname, './src/views')); // Here we tell the folders for templates

app.use(express.static(path.join(__dirname, './src/static')));
// Here we use middleware type static,
//    so express would look for required files

// EJS Variables
// we can pass some variables to the reqest through the locals property
// app.use((req, res, next) => {
//   res.locals.greeting = 'hello';
//   return next();
// });

app.locals.siteName = "ROUX Meetups";

app.use( async (req, res, next) => {
  try {
    const names = await speakersService.getNames();
    res.locals.speakerNames = names; // Here we pass the data 
    // console.log(res.locals);
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(
  '/',
  indexRoute({
    feedbackService, // Here we are passing the data to the routing as an object
    speakersService,
  })
);

// Moved index.html route to index.js in routes
// ! We can use Express router to create sub-applications in other files
// app.get('/speakers', (req, res) => {
//   res.sendFile(path.join(__dirname, './src/static/speakers.html'))
// });

// Error handling
// we should check and catch possible errors
// app.get('/throw', (reqm, res, next) => {
//   // throw new Error('Threw Error.'); // would throw an Error, but the app woiuld still run

//   setTimeout(() => {
//     // throw new Error('Threw Error.'); // would throw an Error, THE APP WOULD CRASH!
//     // So any errors in async functions should be handled
//     return next(new Error('Threw Error.')); // Recommended way of raising errors
//   }, 500);
// });
// If we would throw an Error somewhere in the middleware, the site would hang!

app.use((req, res, next) => {
  return next(createError(404, 'File not found'))
});

app.use((err, req, res, next) => { // middleware with four arguments -> error handling
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  console.error(err);
  res.status(status);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Express server is listenning on PORT ${PORT}`);
});

/**
 * we can use template engines to create dinamic and responsive websites
 * The engine get templates and some data and combines it into the standard HTML file
 *    So we can create website from the components without any repetitions at all.
 *
 * In this course we would use EJS template engine
 *
 * ### Installing
 * install with
 * `npm install ejs`
 *
 * ### Tags
 * Tags used in the templates:
 *
 * <%  -> 'Scriptlet' tag, for control-flow, no output
 * <%_ -> ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
 * <%= -> Outputs the value into the template (HTML escaped)
 * <%- -> Outputs the unescaped value into the template -> HTML inside a variable
 * <%# -> Comment tag, no execution, no output
 * <%% -> Outputs a literal '<%'
 * %>  -> Plain ending tag
 * -%> -> Trim-mode ('newline slurp') tag, trims following newline
 * _%> -> ‘Whitespace Slurping’ ending tag, removes all whitespace after it
 *
 * Including templates:
 * Includes are relative to the template with the include call.
 *
 * (This requires the 'filename' option.)
 * For example if you have "./views/users.ejs" and "./views/user/show.ejs" you would use
 * <%- include('user/show'); %>.
 *
 * You'll likely want to use the raw output tag (<%-)
 * with your include to avoid double-escaping the HTML output.
 *
 */

/**
 * mostly everything is created Middleware
 *
 * Syntax
 * app.use(callback)
 * app.use(path, callback) // would be used only for the the specific path
 *
 * app.  (path, calback) // specific types of middleware for HTML responses
 *  get
 *  post
 *  put
 *  delete
 *
 * Middlwares can:
 * 1. execute any code
 * 2. change req and res objects
 * 3. End req-res cycle - mostly sent data back to the user
 * 4. call the next middleware
 *
 * Example:
 * app.use((req, res, next) => {
 *    // Do something
 *    return next(); // use it, or the req will hang
 * });
 *
 *   "verb"   "path"     "Handler function"
 * app.get('/feedback', (req, res, next) => {
 *    // Do something
 *    return res.send('Hello')
 * });
 *
 */

// Parameter routes
// We can use them to get some data from the route
// app.get('/speakers/:speakername', handler); // param. speakername would be available to the handler
// app.get('/speakers/:speakername?', handler);  // param. speakername can be empty

// Express request lifecycle
// Example:

//                                      next()           next()                       res.send()
// Request : GET /speakers -> app.use()  ->    app.use()  ->    app.get('/speakers') -> RESPONSE
//                                                              app.post()
//                                                              app.get()

// So the reqest first passed through all the app.use() with next() pointing to the next action (control flow)
//   after it get to some point of the response, the program sends res.send(...) data to the user


/**
 * HTTP is stateless
 * If we need to use sessions to keep the data about users
 * 
 * for it we can use `cookie-session` module:
 * npm install cookie-session
 * 
 */