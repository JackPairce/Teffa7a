const tryCatchWrapper = require("../../helpers/tryCatchWrapper");
const _ = require("lodash");
const { db } = require("../../models");

const getUsers = tryCatchWrapper(async (req, res, next) => {
  let result = await db.User.find(req.body);
  return res.status(200).json({ Users: result });
});

const getOneUser = tryCatchWrapper(async (req, res, next) => {
  let result = await db.User.findById(req.params.id);
  return res.status(200).json({ User: result });
});
const deleteUser = tryCatchWrapper(async (req, res, next) => {
  let result = await db.User.deleteOne(req.params.id);
  return res.status(200).json({ UserDeleted: result });
});
const updateUser = tryCatchWrapper(async (req, res, next) => {
  let result = await db.User.updateOne(req.params.id, req.body);
  return res.status(200).json({ UserDeleted: result });
});

module.exports = {
  getUsers,
  getOneUser,
  deleteUser,
  updateUser,
};
