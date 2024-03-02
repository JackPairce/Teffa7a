const tryCatchWrapper = require("../../helpers/tryCatchWrapper");
const _ = require("lodash");
const { db } = require("../../models");

const createManyComment = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Comment.insertMany(req.body);
  return res.status(200).json({ Comments: result });
});
const createComment = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Comment.create(req.body);
  return res.status(200).json({ Comments: result });
});
const getComments = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Comment.find(req.body);
  return res.status(200).json({ Comments: result });
});

const getOneComment = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Comment.findById(req.params.id);
  return res.status(200).json({ Comment: result });
});
const deleteComment = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Comment.deleteOne(req.params.id);
  return res.status(200).json({ CommentDeleted: result });
});
const updateComment = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Comment.updateOne(req.params.id, req.body);
  return res.status(200).json({ CommentDeleted: result });
});

module.exports = {
  getComments,
  createManyComment,
  getOneComment,
  deleteComment,
  updateComment,
  createComment,
};
