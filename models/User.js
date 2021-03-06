const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const saltRounds = 10;

const UserSchema = new mongoose.Schema(
  {
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
    phone: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (phone) => User.doesNotExist({ phone }),
        message: "Phone number already exists",
      },
    },
    email: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
      unique: true,
      validate: {
        validator: (email) => User.doesNotExist({ email }),
        message: "Email already exists",
      },
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    pictureUrl: String,
    allergies: [{}],
    preferences: [{}],
    favoriteRecipes: [String],
    hosting: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    pending: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    accepted: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    declined: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    memberSince: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "User" }
);

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

UserSchema.statics.doesNotExist = async function (field) {
  return (await this.where(field).countDocuments()) === 0;
};

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
