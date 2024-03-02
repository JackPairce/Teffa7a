const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  information: {
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female"] },
    location: { type: String },
    bio: { type: String },
    profile_pic: { type: String },
    cover_pic: { type: String },
    website: { type: String },
    phone_number: { type: String },
  },
  isDocter: { type: Boolean, default: false },
  doc_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doc_info",
  },
});

module.exports = mongoose.model("User", userSchema);
