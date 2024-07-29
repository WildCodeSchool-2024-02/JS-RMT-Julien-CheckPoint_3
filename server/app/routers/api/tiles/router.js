const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/tileActions");

router.get("/", browse);

router.get("/:tile", browse);

/* ************************************************************************* */

module.exports = router;
