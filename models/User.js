const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  events: {
    hosting: [
      {
        type: Schema.ObjectId,
        ref: "Event",
      },
    ],
    pending: [
      {
        type: Schema.ObjectId,
        ref: "Event",
      },
    ],
    accepted: [
      {
        type: Schema.ObjectId,
        ref: "Event",
      },
    ],
    declined: [
      {
        type: Schema.ObjectId,
        ref: "Event",
      },
    ],
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
