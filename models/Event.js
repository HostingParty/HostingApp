const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema(
  {
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
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    address: String,
    hosting: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    pending: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    accepted: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    declined: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // This field might need to be updated. Each recipe might be an object with further information.... ie image, title, description, url etc.
    menu: [{}],
  },
  { collection: "Event" }
);

EventSchema.pre("save", function (next) {
  let event = this;

  if (event.isModified("title description menu eventDate")) {
    this.dateUpdated = Date.now();
  }

  next();
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
