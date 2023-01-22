// Notes on the course EPAM UpSkillMe for Node.js and Express course
// Completed by Arkadii Semenov on 2023.01.22

/**
 * #### Express main parts:
 * 1. express() -> main run function, that returns the object of Application
 * 2. Application -> main route, superset of methods and data for Router
 *    let's us define the middleware and routes
 * 3. Router -> subset class of Application, responsible for routing
 * 4. Request and Response -> helper classes for handling requests and responses
 *    with it we can use and access data of HTTP requests and responses
 *
 * Popular Express middleware: -> used to add functionality and add transforming of the functionality
 * 1. body-parser -> parse HTTP request body
 * 2. compression -> compress HTTP responses
 * 3. cookie-parser -> parse cookie header and populate req.cookies
 * 4. multer -> handle multipart form data such as files
 * 5. serve-favicon -> serve a favicon to our application
 * 6. session -> establish server-based sessions (development-only)
 * 7. helmet -> secure apps by setting various HTTP headers
 * 8. passport -> authentication using "strategies" such as OAuth, OpenID, and may others
 */

const express = require("express");
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const SpeakerService = require("./services/SpeakerService");
const FeedbackService = require("./services/FeedbackService");

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

  app.use(async (req, res, next) => {
    try {
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
