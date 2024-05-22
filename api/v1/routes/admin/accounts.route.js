const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/accounts.controller");

router.post("/create" , controller.createPost);

module.exports = router;