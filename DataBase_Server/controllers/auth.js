const { generateAccessToken } = require("../helpers/jwt");
const tryCatchWrapper = require("../helpers/tryCatchWrapper");
const _ = require("lodash");
const { formatSuccessResponse } = require("../helpers/formatResponse");
const { db } = require("../models");

const login = tryCatchWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  let result = await db.User.find({ email: email, password: password });
  if (result.length > 0) {
    let accessToken = generateAccessToken(result[0]); //add additional infos

    return res.status(200).json({ user: result[0], accessToken: accessToken });
  }
  return res.status(200).json({ user: null });
});

const register = tryCatchWrapper(async (req, res, next) => {
  const result = await db.User.create(req.body);
  return res.status(200).json({ user: result, accessToken: null });
});
module.exports = {
  login,
  register,
};
