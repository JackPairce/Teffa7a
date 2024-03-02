const tryCatchWrapper = require("../../helpers/tryCatchWrapper");
const _ = require("lodash");
const { db } = require("../../models");

const getsubMedics = tryCatchWrapper(async (req, res, next) => {
  let result = await db.submedic.find(req.body);
  return res.status(200).json({ submedics: result });
});

const createSubMedic = tryCatchWrapper(async (req, res, next) => {
  let result = await db.submedic.create(req.body);
  return res.status(200).json({ result });
});

const createManySubMedic = tryCatchWrapper(async (req, res, next) => {
  let result = await db.submedic.insertMany(req.body);
  return res.status(200).json({ result });
});
const getOneSubMedic = tryCatchWrapper(async (req, res, next) => {
  let result = await db.submedic.findById(req.params.id);
  return res.status(200).json({ result });
});
const deleteSubmedic = tryCatchWrapper(async (req, res, next) => {
  let result = await db.submedic.deleteOne(req.params.id);
  return res.status(200).json({ result });
});
const updateSubmedic = tryCatchWrapper(async (req, res, next) => {
  let result = await db.submedic.updateOne(req.params.id, req.body);
  return res.status(200).json({ result });
});

module.exports = {
  createSubMedic,
  getsubMedics,
  getOneSubMedic,
  deleteSubmedic,
  createManySubMedic,
  updateSubmedic,
};
