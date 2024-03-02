const express = require("express");
const userController = require("../../controllers/system/userController");
const router = express.Router();

router.post("/get", userController.getUsers);
router.get("/get/:id", userController.getOneUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
