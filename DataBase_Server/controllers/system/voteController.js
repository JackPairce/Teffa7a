const tryCatchWrapper = require("../../helpers/tryCatchWrapper");
const _ = require("lodash");
const { db } = require("../../models");

const getvotes = tryCatchWrapper(async (req, res, next) => {
  let result = await db.vote.find(req.body);
  return res.status(200).json({ votes: result });
});

const createmanyVotes = tryCatchWrapper(async (req, res, next) => {
  let result = await db.vote.insertMany(req.body);
  return res.status(200).json({ posts: result });
});

const createVote = tryCatchWrapper(async (req, res, next) => {
  let result = await db.vote.create(req.body);
  return res.status(200).json({ posts: result });
});
const getOnevote = tryCatchWrapper(async (req, res, next) => {
  let result = await db.vote.findById(req.params.id);
  return res.status(200).json({ vote: result });
});
const deletevote = tryCatchWrapper(async (req, res, next) => {
  let result = await db.vote.deleteOne(req.params.id);
  return res.status(200).json({ voteDeleted: result });
});
const updatevote = tryCatchWrapper(async (req, res, next) => {
  let result = await db.vote.updateOne(req.params.id, req.body);
  return res.status(200).json({ voteDeleted: result });
});

module.exports = {
  getvotes,
  getOnevote,
  createVote,
  createmanyVotes,
  deletevote,
  updatevote,
};
