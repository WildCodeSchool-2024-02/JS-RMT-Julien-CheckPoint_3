const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/tileActions");

router.get("/", browse);

module.exports = router;
