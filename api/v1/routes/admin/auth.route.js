const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/auth.controller");

router.post("/login" , controller.loginPost);

module.exports = router;