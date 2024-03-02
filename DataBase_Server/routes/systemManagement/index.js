const express = require("express");
const router = express.Router();

const commentRoutes = require("./commentRoutes");
const submedicRoutes = require("./submedicRoutes");
const voteRoutes = require("./voteRoutes");
const postRoutes = require("./postRoutes.js");
const userRoutes = require("./userRoutes");
const doctorRoutes = require("./doctorRoutes");
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/submedic", submedicRoutes);
router.use("/vote", voteRoutes);
router.use("/user", userRoutes);
router.use("/docinfo", doctorRoutes);

module.exports = router;
