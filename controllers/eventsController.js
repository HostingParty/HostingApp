const db = require("../models");

// @desc    Get all events
// @route   GET /api/v1/events
// @access  Public
exports.getEvents = (req, res, next) => {
  db.Event.find({}).exec((err, events) => {
    if (err) throw err;

    res.status(200).json({
      success: true,
      data: events,
    });
  });
};

// @desc    Get a single event
// @route   GET /api/v1/events/:id
// @access  Public
exports.getSingleEvent = (req, res, next) => {
  let id = req.params.id;

  // Currently only returns user name and email. Edit populate for more user info.
  db.Event.find({ _id: id })
    .populate("hosting pending accepted decline", "name email")
    .exec((err, event) => {
      if (err) throw err;

      res.status(200).json({
        success: true,
        data: event,
      });
    });
};
