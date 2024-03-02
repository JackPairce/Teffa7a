"use strict";
const express = require("express");
const { fetchData, insert, Auth } = require("./modules/DB_server");
const { cols } = require("./modules/sharedConst.model");
const { getArticles } = require("./modules/Data_Process");
const user = require("./DataBase/models/user");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.json());

// sending data to front
app.post("/posts", async (req, res) => {
  // console.log(req.body);
  // res.status(200).json({ x: "req.body" });

  var data = await getArticles(req.body.id);
  // const DataIDs = data.map((post) => post._id);
  // const comments = await fetchData(cols.comment, { post: { $in: DataIDs } });
  // console.log(
  //   data.map(
  //     (post) =>0
  //       (post.nbComments = comments.map(
  //         (comment) => comment.post == post._id
  //       ).length)
  //   )
  // );
  // const posts = await fetchData(cols.posts);
  // const response = posts.map((post) => {
  //   return {
  //     ...post,
  //     nbComments: comments.filter((comment) => comment.post == post._id).length,
  //   };
  // });
  res.send(data);
});

app.post("/createUser", async (req, res) => {
  const data = req.body;
  let Doc_Data;
  if (data.isDoctor) Doc_Data = await insert(cols.doc_info, data.doc_info);

  /**
   * @type {express.Response} response
   */
  const response = await Auth("register", {
    ...data,
    doc_info: Doc_Data?.data._id ? Doc_Data.data._id : null,
  });
  let type = typeof response;
  // console.log({ status: response.status, type });
  res.send(!data.isDoctor);
});

app.get("/", async (req, res) => {
  var data = await fetchData(cols.post);
  res.send(data);
});

app.get("/create", async (req, res) => {
  var data = await insert(cols.post, {
    submedic: "65e1f301464c7c320ee6ad4d",
    user: "65e22041a66e02de59f696f3",
    title: "test456",
    content: "test",
  });
  res.send(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
