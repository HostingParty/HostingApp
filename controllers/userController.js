const db = require("../models");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  let query;

  query = db.User.find({});

  const users = await query;

  res.status(200).json({
    success: true,
    data: users,
  });
};

// @desc    Get a single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getSingleUser = async (req, res, next) => {
  let id = req.params.id;
  let query;

  // Currently only returns event id and title. Edit populate for more event info.
  query = db.User.find({ _id: id }).populate("hosting pending accepted decline", "title");

  const user = await query;

  res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc    Add a user
// @route   POST /api/v1/users/
// @access  Public
exports.addUser = async (req, res, next) => {
  let query;

  //req.body needs the following parameters (name.first, name.last, email, phone, password)
  query = db.User.create(req.body);

  const user = await query;

  res.status(200).json({
    success: true,
    data: user,
  });
};
