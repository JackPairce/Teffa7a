const tryCatchWrapper = require("../../helpers/tryCatchWrapper");
const _ = require("lodash");
const { db } = require("../../models");

const getDocInfo = tryCatchWrapper(async (req, res, next) => {
  let result = await db.DocInfo.find(req.body);
  return res.status(200).json(result);
});
const createDocInfo = tryCatchWrapper(async (req, res, next) => {
  let result = await db.DocInfo.create(req.body);
  return res.status(200).json(result);
});

const getOneDocInfo = tryCatchWrapper(async (req, res, next) => {
  let result = await db.DocInfo.findById(req.params.id);
  return res.status(200).json(result);
});
const deleteDocInfo = tryCatchWrapper(async (req, res, next) => {
  let result = await db.DocInfo.deleteOne(req.params.id);
  return res.status(200).json(result);
});
const updateDocInfo = tryCatchWrapper(async (req, res, next) => {
  let result = await db.DocInfo.updateOne(req.params.id, req.body);
  return res.status(200).json(result);
});

module.exports = {
  getDocInfo,
  createDocInfo,
  getOneDocInfo,
  deleteDocInfo,
  updateDocInfo,
};
