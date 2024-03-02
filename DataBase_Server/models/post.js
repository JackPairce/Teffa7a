const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },

    submedic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "submedic",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    votesNumber: {
      type: Number,
      default: 0,
    },
    viewers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// createAdmin("ilyes@easyvam.com", "ilyes$123");

module.exports = mongoose.model("post", postSchema);

// createAdmin();
