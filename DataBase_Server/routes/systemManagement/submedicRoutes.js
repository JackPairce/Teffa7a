const express = require("express");
const submedicController = require("../../controllers/system/submedicController");
const router = express.Router();

router.post("/create", submedicController.createSubMedic);
router.post("/createmany", submedicController.createManySubMedic);
router.post("/get", submedicController.getsubMedics);
router.get("/get/:id", submedicController.getOneSubMedic);
router.put("/update/:id", submedicController.updateSubmedic);
router.delete("/delete/:id", submedicController.deleteSubmedic);

module.exports = router;
