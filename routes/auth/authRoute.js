const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");

router.post("/auth/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/auth/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
