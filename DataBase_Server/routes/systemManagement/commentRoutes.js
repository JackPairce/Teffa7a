const express = require("express");
const commentController = require("../../controllers/system/commentController");
const router = express.Router();

router.post("/createmany", commentController.createManyComment);
router.post("/create", commentController.createComment);
router.post("/get", commentController.getComments);
router.get("/get/:id", commentController.getOneComment);
router.put("/update/:id", commentController.updateComment);
router.delete("/delete/:id", commentController.deleteComment);

module.exports = router;
