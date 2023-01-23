const express = require("express");
const passport = require("passport");

const UserModel = require("../../models/UserModel");

const middlewares = require("../middlewares");

const router = express.Router();

function redirectIfLoggedIn(req, res, next) {
  // Here we added a checker middleware before accessing the route
  // we just send an error code 403 - access denied if the user isn't authenticated.
  if (req.user) return res.redirect("/users/account");
  return next();
}

module.exports = (params) => {
  const { avatars } = params;

  router.get("/login", redirectIfLoggedIn, (req, res) =>
    res.render("users/login", { error: req.query.error })
  );

  router.post(
    "/login",
    passport.authenticate("local", {
      // here we define what to do on the success/failure
      successRedirect: "/",
      failureRedirect: "/users/login?error=true",
    })
  );

  router.get("/logout", (req, res) => {
    req.logout((err) => {
      if (err) return next(err);
      return res.redirect("/");
    });
  });

  router.get("/registration", redirectIfLoggedIn, (req, res) =>
    res.render("users/registration", { success: req.query.success })
  );

  router.post(
    "/registration",
    middlewares.upload.single("avatar"),
    middlewares.handleAvatar(avatars),
    async (req, res, next) => {
      // we will use the multer to access the data from body even if it contains some binary data

      // We would implement the user creation logic here,
      // but we can always dump it into another file as a service
      try {
        const user = new UserModel({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });

        if(req.file && req.file.storedFilename) {
          user.avatar = req.file.storedFilename;
          // Set custom avatar to the user
        }

        const savedUser = await user.save(); // the user will be stored in the DB
        if (savedUser) return res.redirect("/users/registration?success=true");

        return next(new Error("Failed to save user for unknown reasons"));

      } catch (err) {
        if(req.file && req.file.storedFilename) {
          await avatars.delete(req.file.storedFilename);
        }
        return next(err);
      }
    }
  );

  router.get(
    "/account",
    (req, res, next) => {
      if (req.user) return next();
      return res.status(401).end();
      // Here we added a checker before accessing the route
      // we just send an error code 403 - access denied if the user isn't authenticated.
    },
    (req, res) => res.render("users/account", { user: req.user })
  );

  router.get('/avatar/:filename', (req, res) => {
    res.type('png');
    return res.sendFile(avatars.filepath(req.params.filename));
  });

  router.get('/avatartn/:filename', async (req, res) => {
    res.type('png');
    const tn = await avatars.thumbnail(req.params.filename);
    return res.end(tn, 'binary');
  });

  return router;
};
