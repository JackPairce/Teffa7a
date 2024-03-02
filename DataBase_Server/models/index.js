const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Follower = require("./follower");
const submedic = require("./submedic");
const vote = require("./vote");
const DocInfo = require("./doc_info");
const db = {
  User,
  vote,
  submedic,
  Follower,
  Comment,
  Post,
  DocInfo,
};
module.exports = {
  db,
};
