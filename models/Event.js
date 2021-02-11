const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
  attendees: {
    hosting: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    pending: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    accepted: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    declined: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  // This field might need to be updated. Each recipe might be an object with further information.... ie image, title, description, url etc.
  menu: {
    apps: [String],
    sides: [String],
    main: [String],
    dessert: [String],
  },
});

EventSchema.pre("save"),
  function (next) {
    let event = this;

    if (event.isModified("title description menu eventDate")) {
      this.dateUpdated = Date.now();
    }

    next();
  };

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
