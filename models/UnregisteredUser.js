const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Could also require a name to be entered by Host User on Client side form?

const UnregisteredUserSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    event: [
      {
        type: Schema.ObjectId,
        ref: "Event",
      },
    ],
  },
  { collection: "UnregisteredUser" }
);

const UnregisteredUser = mongoose.model("UnregisteredUser", UnregisteredUserSchema);

module.exports = UnregisteredUser;
