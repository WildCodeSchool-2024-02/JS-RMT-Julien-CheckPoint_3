const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const tileActions = require("../../../controllers/tileActions");

router.get("/", tileActions.browse);

/* ************************************************************************* */

module.exports = router;
