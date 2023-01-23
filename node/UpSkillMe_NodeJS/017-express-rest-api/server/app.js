// Notes on the course EPAM UpSkillMe for Node.js and Express course
// Completed by Arkadii Semenov from 2023.01.22

/**
 * #### Express main parts:
 * 1. express() -> main run function, that returns the object of Application
 * 2. Application -> main route, superset of methods and data for Router
 *    let's us define the middleware and routes
 * 3. Router -> subset class of Application, responsible for routing
 * 4. Request and Response -> helper classes for handling requests and responses
 *    with it we can use and access data of HTTP requests and responses
 *
 * #### Popular Express middleware
 * It is used to add functionality and add transforming of the functionality
 * 1. body-parser -> parse HTTP request body
 * 2. compression -> compress HTTP responses
 * 3. cookie-parser -> parse cookie header and populate req.cookies
 * 4. multer -> handle multipart form data such as files
 * 5. serve-favicon -> serve a favicon to our application
 * 6. session -> establish server-based sessions (development-only)
 * 7. helmet -> secure apps by setting various HTTP headers
 * 8. passport -> authentication using "strategies" such as OAuth, OpenID, and may others
 *
 * #### MongoDB connection
 * we can use Mongoose to connect and interact with the MongoDB Cluster
 * but useful functionality come with some performance issues
 * so consider thinking about the usage of Mongoose for the application with big performance requirements.
 *
 * MongoDB has the concept of 'schemas' - interface of some data.
 * Mongoose created 'models' - programming interfaces that allow manipulate data with schemas.
 * Further information in the db.js and UserModel.js
 *
 *
 * #### bcrypt
 * It is a really bad practice to store passwords in strings without any encryption.
 * So we would use the bcrypt library to cipher our passwords and only then store them.
 * bcrypt implements a hash and compare functions to first hash the password and only then store it in the DB.
 * Comparison function is linear time, so it is protected from timing attacks, which use the check speed to understand how close the password is.
 *
 * Look into UserModel.js
 *
 * #### Cookies and sessions
 * We need to understand how would we store the dta about the user on the server.
 *
 * Authentication Flow
 * 1. Browser --- POST /login {Form data} ---> Server
 * 1. Server --- createSession(user) ---> App
 * 1. App --- Save {userId='42'} ---> DB
 * 1. Server  <--- {sessionId: 123abcdef} --- App // created the session
 * 1. Browser  <--- HTML {Header: {Set-Cookie: id=123abcdef}} --- Server
 * 1. Browser  --- GET /account {Header: {Set-Cookie: id=123abcdef}} ---> Server
 * 1. Server --- find(id: a23abcdef) ---> App
 * 1. Server <--- Access granted {userId='42'} --- App
 *
 * We should use something like a hash for the user cookies and sessions, so the data could be got only by the Server,
 *  in either case anyone would be able to become that user.
 *
 * Set-Cookie method properties:
 * 1. id = 123123;
 * 1. Expires=Date; // the date of expiration, so the cookies won't function after a period of time
 * 1. Secure; // access to the cookies should be only through SSL certificate
 * 1. HttpOnly; // cookies can't be read by teh user on a JS client
 *
 * to get that functionality we can use "cookie-parser" middleware
 *    also we need to use sessions, we can use "express-session" for that,
 *    but because it store the data in memory we should move to another solution.
 *    also express sessions provide additional functionality to connect to other libraries.
 *
 * Further reading:
 * 1. All You Ever Wanted to Know About Sessions In Node.js  https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-Sessions
 * 2. Are You Using Cookies? Then This Ultimate Guide Is For You https://html.com/resources/cookies-ultimate-guide/
 * 
 * #### Passport
 * Passport provide an 'authenticate' function, this function uses one of
 *  the whole set of provided strategies (Local, OAuth, Social, ...500+...).
 * Once the user was authenticated it will also store the user's session and data.
 * 
 * Using in Express:
 * - passport.initialize() -> return a middleware function
 *    that uses the request (req) object to store passport
 *    internal data in it.
 * - passport.session() -> Looks for previously serialized user in the current session
 *    and uses a provided deserialization function to provide the user in req.user
 *    to all following middleware-s and routes.
 * 
 * we can user different strategies for the authentication and authorization.
 * Further reading:
 * 1. Learn Using JWT with Passport Authentication https://medium.com/front-end-weekly/learn-using-jwt-with-passport-authentication-9761539c4314
 * 2. How To Implement API Authentication with JSON Web Tokens and Passport https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport
 * 
 */

const path = require("path");

const express = require("express");
const session = require("express-session");

const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const routes = require("./routes");
const SpeakerService = require("./services/SpeakerService");
const FeedbackService = require("./services/FeedbackService");

const auth = require('./lib/auth');

module.exports = (config) => {
  const app = express();
  const speakers = new SpeakerService(config.data.speakers);
  const feedback = new FeedbackService(config.data.feedback);

  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "./views"));

  app.locals.title = config.sitename;

  app.use("/", express.static(path.join(__dirname, "../public")));
  app.get("/favicon.ico", (req, res) => res.sendStatus(204));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser()); // initialize Cookie Parser


  app.use(session({
    secret: 'very secret 12345',
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DEVELOPMENT_DB_DSN,
    }),
  }));

  app.use(auth.initialize); // Init the passport middleware
  app.use(auth.session);
  app.use(auth.setUser); // Set the user to response

  app.use(async (req, res, next) => {
    try {
      // req.session.visits = req.session.visits ? req.session.visits+1 : 1;
      // After running the app a couple of time we would be able to see the sessions collection

      const names = await speakers.getNames();
      res.locals.speakerNames = names;
      return next();
    } catch (err) {
      return next(err);
    }
  });

  app.use("/", routes({ speakers, feedback }));

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  if (app.get("env") === "development") {
    app.locals.pretty = true;
  }

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500; // If no status is provided, let's assume it's a 500
    res.locals.status = status;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(status);
    res.render("error");
  });

  return app;
};
