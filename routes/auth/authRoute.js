const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");

router.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ message: info.message });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.json(req.user);
    });
  })(req, res, next);
});

router.get("/auth/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
