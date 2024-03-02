const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const voteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    value: {
      type: Number,
      enum: [1, -1],
      default: 1,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

// createAdmin("ilyes@easyvam.com", "ilyes$123");

module.exports = mongoose.model("Vote", voteSchema);

// createAdmin();
