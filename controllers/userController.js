const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  db.User.find({}, (err, users) => {
    if (err) return res.status(400).json({ success: false, msg: err });

    res.status(200).json({
      success: true,
      data: users,
    });
  });
};

// @desc    Get a single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getSingleUser = async (req, res, next) => {
  let id = req.params.id;

  // Currently only returns event id and title. Edit populate for more event info.
  db.User.find({ _id: id })
    .populate("hosting pending accepted decline", "title description eventDate")
    .populate("friends", "name pictureUrl")
    .exec((err, user) => {
      if (err) return res.status(400).json({ success: false, msg: err });
      if (user.length === 0) return res.status(400).json({ success: false, msg: "No User Found" });

      res.status(200).json({
        success: true,
        data: user,
      });
    });
};

// @desc    Get a single user based on Name
// @route   GET /api/v1/users/search
// @access  Public
exports.getUserByName = async (req, res, next) => {
  let { name } = req.query;
  if (!name) return res.status(400).json({ success: false, msg: err });

  let [first, last] = name.split(" ");
  console.log(first, last);

  // Currently only returns event id and title. Edit populate for more event info.
  db.User.find({ name: { first: first, last: last } }).exec((err, user) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (user.length === 0) return res.status(400).json({ success: false, msg: "No User Found" });

    res.status(200).json({
      success: true,
      data: user,
    });
  });
};

// @desc    Add a user
// @route   POST /api/v1/users/
// @access  Public
exports.addUser = async (req, res, next) => {
  //req.body needs the following parameters (name.first, name.last, email, phone, password)
  db.User.create(req.body, (err, user) => {
    if (err) return res.status(400).json({ success: false, msg: err });

    res.status(200).json({
      success: true,
      data: user,
    });
  });
};

// @desc    Update a User
// @route   PUT /api/v1/users/:id
// @access  Public
exports.updateUser = async (req, res, next) => {
  let id = req.params.id;

  db.User.findByIdAndUpdate(id, req.body, { returnOriginal: false }, (err, data) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (data === null) return res.status(400).json({ success: false, msg: "No user found" });

    res.status(200).json({
      success: true,
      data: data,
    });
  });
};

// @desc    Update a User Array Fields
// @route   PUT /api/v1/users/array/:id
// @access  Public
exports.updateUserArrayField = async (req, res, next) => {
  let id = req.params.id;
  console.log(req.body);

  db.User.findByIdAndUpdate(id, { $push: req.body }, { returnOriginal: false }, (err, data) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (data === null) return res.status(400).json({ success: false, msg: "No user found" });

    res.status(200).json({
      success: true,
      data: data,
    });
  });
};

// @desc    Update a User Password
// @route   POST /api/v1/users/pw/:id
// @access  Public
exports.updateUserPw = async (req, res, next) => {
  let id = req.params.id;
  let { body } = req;

  if (body.password) {
    // generate a salt
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return res.status(400).json({ succes: false });

      // hash the password using our new salt
      bcrypt.hash(body.password, salt, function (err, hash) {
        if (err) return res.status(400).json({ success: false });
        // override the cleartext password with the hashed one
        body.password = hash;

        db.User.updateOne({ _id: id }, body, (err, result) => {
          if (err) return res.status(400).json({ success: false, msg: err });
          if (result.n === 0) return res.status(400).json({ success: false, msg: "No user found with this id" });

          return res.status(200).json({
            success: true,
            data: result,
          });
        });
      });
    });
  } else {
    return res.status(400).json({ success: false, msg: "No Password" });
  }
};

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  let id = req.params.id;

  db.User.deleteOne({ _id: id }, (err, data) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (data.deletedCount === 0)
      return res.status(400).json({ success: false, msg: "User not found. Nothing was deleted" });

    res.status(200).json({
      success: true,
      data: data,
    });
  });
};
