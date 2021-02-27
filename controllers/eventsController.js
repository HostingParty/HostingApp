const db = require("../models");

// @desc    Get all events
// @route   GET /api/v1/events
// @access  Public
exports.getEvents = (req, res, next) => {
  db.Event.find({}).exec((err, events) => {
    if (err) {
      return res.status(400).json({
        success: false,
        data: err,
      });
    }

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
      if (err) {
        return res.status(400).json({
          success: false,
          data: err,
        });
      }

      res.status(200).json({
        success: true,
        data: event,
      });
    });
};

// @desc    Add an event
// @route   POST /api/v1/events/
// @access  Public
exports.addEvent = async (req, res, next) => {
  //req.body needs the following parameters (title, description, eventDate) - See Model for full fields list
  db.Event.create(req.body, (err, event) => {
    if (err) return res.status(400).json({ success: false, msg: err });

    res.status(200).json({
      success: true,
      data: event,
    });
  });
};

// @desc    Update an event
// @route   POST /api/v1/events/:id
// @access  Public
exports.updateEvent = async (req, res, next) => {
  let id = req.params.id;

  // Assumes request body sent contains original + updated data
  db.Event.findOneAndUpdate({ _id: id }, req.body, { returnOriginal: false }, (err, event) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (event === null) return res.status(400).json({ success: false, msg: "Nothing was updated" });

    res.status(200).json({
      success: true,
      data: event,
    });
  });
};

// @desc    Delete an Event
// @route   DELETE /api/v1/events/:id
// @access  Public
exports.deleteEvent = async (req, res, next) => {
  let id = req.params.id;

  db.Event.deleteOne({ _id: id }, (err, data) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (data.deletedCount === 0) return res.status(400).json({ success: false, msg: "Nothing was deleted" });

    res.status(200).json({
      success: true,
      data: data,
    });
  });
};

// @desc    Update an event recipes
// @route   POST /api/v1/event/:id
// @access  Public
exports.updateEventRecipe = async (req, res, next) => {
  let id = req.params.id;
  let recipe = req.body.recipe;
  let menu = req.body.menu;
  let objRecipe = {[menu]: recipe}
  // Assumes request body sent contains original + updated data
  db.Event.findOneAndUpdate({ _id: id }, { $push: objRecipe }, { returnOriginal: false }, (err, event) => {
    if (err) return res.status(400).json({ success: false, msg: err });
    if (event === null) return res.status(400).json({ success: false, msg: "Nothing was updated" });
    res.status(200).json({
      success: true,
      data: event,
    });
  });
};
