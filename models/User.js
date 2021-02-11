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
  allergies: [String],
  preferences: [String],
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

// For hashing the password - NOTE: these hooks are not executed on update() and findOneAndUpdate()
UserSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
