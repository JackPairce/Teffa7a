const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateAccessToken = (payload) => {
  const plainPayload = payload.toObject();

  return jwt.sign(plainPayload, process.env.JWT_SECRET, { expiresIn: "2h" });
};

module.exports = {
  generateAccessToken,
};
