const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const submedicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  membersNumber: {
    type: Number,

    default: 1,
  },
  media: {
    type: String,
  },
});

// createAdmin("ilyes@easyvam.com", "ilyes$123");

module.exports = mongoose.model("submedic", submedicSchema);

// createAdmin();
