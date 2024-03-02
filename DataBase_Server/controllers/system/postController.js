const tryCatchWrapper = require("../../helpers/tryCatchWrapper");
const _ = require("lodash");
const { formatSuccessResponse } = require("../../helpers/formatResponse");
const { db } = require("../../models");

const createPost = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Post.create(req.body);
  return res.status(200).json({ posts: result });
});
const getPosts = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Post.find(req.body);
  return res.status(200).json({ posts: result });
});

const createManyPosts = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Post.insertMany(req.body);
  return res.status(200).json({ posts: result });
});
const getOnePost = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Post.findById(req.params.id);
  return res.status(200).json({ post: result });
});
const deletePost = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Post.deleteOne(req.params.id);
  return res.status(200).json({ postDeleted: result });
});
const updatePost = tryCatchWrapper(async (req, res, next) => {
  let result = await db.Post.updateOne(req.params.id, req.body);
  return res.status(200).json({ postDeleted: result });
});

module.exports = {
  createPost,
  getPosts,
  createManyPosts,
  getOnePost,
  deletePost,
  updatePost,
};
