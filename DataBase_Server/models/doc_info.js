const mongoose = require("mongoose");

const doc_info = new mongoose.Schema({
  specialty: { type: String, required: true },
  experience: { type: String, required: true },
  certification: { type: String, required: true },
  work_location: { type: String },
});

module.exports = mongoose.model("doc_info", doc_info);
