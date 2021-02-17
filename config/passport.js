const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/index");
const mongoose = require("mongoose");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne(
        {
          email: email,
        },
        (err, dbUser) => {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email.",
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (!dbUser.comparePassword(password)) {
            return done(null, false, {
              message: "Incorrect password.",
            });
          }
          let { _id, email, phone } = dbUser;
          const user = { _id, email, phone };
          // If none of the above, return the user
          return done(null, user);
        }
      );
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
// Exporting our configured passport
module.exports = passport;
