const express = require("express");
const postController = require("../../controllers/system/postController");
const router = express.Router();

router.post("/create", postController.createPost);
router.post("/createmany", postController.createManyPosts);
router.post("/get", postController.getPosts);
router.get("/get/:id", postController.getOnePost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete/:id", postController.deletePost);

module.exports = router;
