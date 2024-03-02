const express = require("express");
const voteController = require("../../controllers/system/voteController");
const router = express.Router();

router.post("/createmany", voteController.createmanyVotes);
router.post("/create", voteController.createVote);
router.post("/get", voteController.getvotes);
router.get("/get/:id", voteController.getOnevote);
router.put("/update/:id", voteController.updatevote);
router.delete("/delete/:id", voteController.deletevote);

module.exports = router;
