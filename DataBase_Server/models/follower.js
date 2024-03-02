const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const followerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// createAdmin("ilyes@easyvam.com", "ilyes$123");

module.exports = mongoose.model("follower", followerSchema);

// createAdmin();
