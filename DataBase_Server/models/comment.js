const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    votesNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// createAdmin("ilyes@easyvam.com", "ilyes$123");

module.exports = mongoose.model("comment", commentSchema);

// createAdmin();
