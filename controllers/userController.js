const db = require("../models");

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
    .populate("hosting pending accepted decline", "title")
    .exec((err, user) => {
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

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  let id = req.params.id;

  db.User.deleteOne({ _id: id }, (err, data) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (data.deletedCount === 0) return res.status(400).json({ success: false, msg: "Nothing was deleted" });

    res.status(200).json({
      success: true,
      data: data,
    });
  });
};
