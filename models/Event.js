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
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
  hosts: [
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
});

EventSchema.pre("save"),
  function (next) {
    let event = this;

    if (event.isModified("title") || event.isModified("description")) {
      let now = new Date();
      this.dateUpdated = now;
    }

    next();
  };

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
