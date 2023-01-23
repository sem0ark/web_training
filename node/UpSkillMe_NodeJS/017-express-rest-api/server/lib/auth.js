const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("../models/UserModel");
// get the local authentication strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (username, password, done) => {
      try {
        const user = await UserModel.findOne({
          email: username,
        }).exec();
        if (!user) {
          return done(null, false, { message: "Invalid username or password" });
        }

        const passwordOK = await user.comparePassword(password);

        if (!passwordOK) {
          return done(null, false, { message: "Invalid username or password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Here we've implemented the serialization function for storing our data
//  but we should use just the ID of the user to not store additional data
//  because if we stored the whole user object and teh user data was changed or deleted on the other instance,
//  the session object would be the same.
passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id).exec();
    // it would throw an error if the user isn't defined
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
  setUser: (req, res, next) => {
    res.locals.user = req.user;
    return next();
  },
};
