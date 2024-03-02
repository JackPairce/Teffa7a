const express = require("express");
const doc_info = require("../../controllers/system/doc_info");
const router = express.Router();

router.post("/create", doc_info.createDocInfo);
router.post("/get", doc_info.getDocInfo);
router.get("/get/:id", doc_info.getOneDocInfo);
router.put("/update/:id", doc_info.updateDocInfo);
router.delete("/delete/:id", doc_info.deleteDocInfo);

module.exports = router;
