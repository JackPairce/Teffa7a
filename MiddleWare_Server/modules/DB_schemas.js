const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  information: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    profile_pic: { type: String, required: true },
    cover_pic: { type: String, required: true },
    website: { type: String, required: true },
    phone_number: { type: String, required: true },
  },
  isDocter: { type: Boolean, required: true },
  Profitional_information: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profitional_information",
  },
});

const Profitional_information = new mongoose.Schema({
  _id: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: Number, required: true },
  education: { type: String, required: true },
  certification: { type: String, required: true },
  work_hours: { type: String, required: true },
  work_days: { type: String, required: true },
  work_location: { type: String, required: true },
  work_phone: { type: String, required: true },
  bio: { type: String, required: true },
  availability: { type: String, required: true },
});

const Medical_facilities = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  phones: { type: Array, required: true },
  bio: { type: String, required: true },
  services: { type: String, required: true },
  website: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Appointment = new mongoose.Schema({
  _id: { type: String, required: true },
  user_id: { type: String, required: true },
  doctor_id: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  reason: { type: String, required: true },
});

const Medical_record = new mongoose.Schema({
  _id: { type: String, required: true },
  user_id: { type: String, required: true },
  doctor_id: { type: String, required: true },
  date: { type: String, required: true },
  type: { type: String, required: true },
  reason: { type: String, required: true },
  diagnosis: { type: String, required: true },
  prescription: { type: String, required: true },
  test_result: { type: String, required: true },
});

const Articles = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  tags: { type: Array, required: true },
  content: { type: String, required: true },
});

module.exports = {
  userSchema,
  Profitional_information,
  Medical_facilities,
  Appointment,
  Medical_record,
  Articles,
};
