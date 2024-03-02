const express = require("express");
const systemAuthController = require("../controllers/auth");
const router = express.Router();

router.post("/login", systemAuthController.login);
router.post("/register", systemAuthController.register);

module.exports = router;
